import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { insertLicenseKeySchema, insertPaymentSchema } from "@shared/schema";
import { downloadRepoAsZip } from "./githubClient";
import { randomBytes } from "crypto";

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

// Environment variables for GitHub repo
const GITHUB_OWNER = process.env.GITHUB_OWNER || "yourusername";
const GITHUB_REPO = process.env.GITHUB_REPO || "sitesecure-pro-full";
const GITHUB_REF = process.env.GITHUB_REF || "main";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Create payment intent for license purchase
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ message: "Payment processing is not available - STRIPE_SECRET_KEY not configured" });
    }
    
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const amount = 99.00; // $99 for license
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          email,
          product: "sitesecure-pro-license"
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(500).json({ message: "Error creating payment intent: " + error.message });
    }
  });

  // Handle successful payment and generate license key
  app.post("/api/confirm-payment", async (req, res) => {
    if (!stripe) {
      return res.status(503).json({ message: "Payment processing is not available - STRIPE_SECRET_KEY not configured" });
    }
    
    try {
      const { paymentIntentId } = req.body;

      if (!paymentIntentId) {
        return res.status(400).json({ message: "Payment intent ID is required" });
      }

      // Retrieve payment intent from Stripe
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

      if (paymentIntent.status !== "succeeded") {
        return res.status(400).json({ message: "Payment not successful" });
      }

      const email = paymentIntent.metadata.email;
      const amount = (paymentIntent.amount / 100).toString();

      // Create payment record
      await storage.createPayment({
        email,
        amount,
        stripePaymentIntentId: paymentIntentId,
        status: "completed",
      });

      // Generate license key
      const licenseKey = `SITE-${randomBytes(4).toString('hex').toUpperCase()}-${randomBytes(4).toString('hex').toUpperCase()}-${randomBytes(4).toString('hex').toUpperCase()}`;

      // Store license key
      await storage.createLicenseKey({
        key: licenseKey,
        email,
        stripePaymentIntentId: paymentIntentId,
      });

      res.json({ licenseKey });
    } catch (error: any) {
      res.status(500).json({ message: "Error confirming payment: " + error.message });
    }
  });

  // Validate and activate license key
  app.post("/api/activate-license", async (req, res) => {
    try {
      const { licenseKey } = req.body;

      if (!licenseKey) {
        return res.status(400).json({ message: "License key is required" });
      }

      // Check if license key exists
      const license = await storage.getLicenseKeyByKey(licenseKey);

      if (!license) {
        return res.status(400).json({ message: "Invalid license key" });
      }

      if (license.isActivated === "true") {
        return res.status(400).json({ message: "License key already activated" });
      }

      // Activate license key
      await storage.activateLicenseKey(licenseKey);

      res.json({ 
        message: "License activated successfully",
        downloadReady: true 
      });
    } catch (error: any) {
      res.status(500).json({ message: "Error activating license: " + error.message });
    }
  });

  // Download full version from GitHub
  app.post("/api/download-full-version", async (req, res) => {
    try {
      const { licenseKey } = req.body;

      if (!licenseKey) {
        return res.status(400).json({ message: "License key is required" });
      }

      // Verify license key is activated
      const license = await storage.getLicenseKeyByKey(licenseKey);

      if (!license || license.isActivated !== "true") {
        return res.status(400).json({ message: "Invalid or inactive license key" });
      }

      // Download repo from GitHub
      const zipBuffer = await downloadRepoAsZip(GITHUB_OWNER, GITHUB_REPO, GITHUB_REF);

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="sitesecure-pro-full.zip"');
      res.send(zipBuffer);

    } catch (error: any) {
      console.error('Download error:', error);
      res.status(500).json({ message: "Error downloading full version: " + error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
