import { type User, type InsertUser, type LicenseKey, type InsertLicenseKey, type Payment, type InsertPayment } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLicenseKey(licenseKey: InsertLicenseKey): Promise<LicenseKey>;
  getLicenseKeyByKey(key: string): Promise<LicenseKey | undefined>;
  activateLicenseKey(key: string): Promise<LicenseKey | undefined>;
  
  createPayment(payment: InsertPayment): Promise<Payment>;
  getPaymentByStripeId(stripePaymentIntentId: string): Promise<Payment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private licenseKeys: Map<string, LicenseKey>;
  private payments: Map<string, Payment>;

  constructor() {
    this.users = new Map();
    this.licenseKeys = new Map();
    this.payments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLicenseKey(insertLicenseKey: InsertLicenseKey): Promise<LicenseKey> {
    const id = randomUUID();
    const licenseKey: LicenseKey = {
      ...insertLicenseKey,
      id,
      stripePaymentIntentId: insertLicenseKey.stripePaymentIntentId ?? null,
      isActivated: "false",
      activatedAt: null,
      createdAt: new Date(),
    };
    this.licenseKeys.set(licenseKey.key, licenseKey);
    return licenseKey;
  }

  async getLicenseKeyByKey(key: string): Promise<LicenseKey | undefined> {
    return this.licenseKeys.get(key);
  }

  async activateLicenseKey(key: string): Promise<LicenseKey | undefined> {
    const licenseKey = this.licenseKeys.get(key);
    if (licenseKey) {
      licenseKey.isActivated = "true";
      licenseKey.activatedAt = new Date();
      this.licenseKeys.set(key, licenseKey);
      return licenseKey;
    }
    return undefined;
  }

  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = {
      ...insertPayment,
      id,
      createdAt: new Date(),
    };
    this.payments.set(id, payment);
    return payment;
  }

  async getPaymentByStripeId(stripePaymentIntentId: string): Promise<Payment | undefined> {
    return Array.from(this.payments.values()).find(
      (payment) => payment.stripePaymentIntentId === stripePaymentIntentId,
    );
  }
}

export const storage = new MemStorage();
