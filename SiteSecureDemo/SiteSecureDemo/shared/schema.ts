import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const licenseKeys = pgTable("license_keys", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").notNull().unique(),
  email: text("email").notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  isActivated: text("is_activated").default("false"),
  activatedAt: timestamp("activated_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const payments = pgTable("payments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  stripePaymentIntentId: text("stripe_payment_intent_id").notNull(),
  status: text("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLicenseKeySchema = createInsertSchema(licenseKeys).pick({
  key: true,
  email: true,
  stripePaymentIntentId: true,
});

export const insertPaymentSchema = createInsertSchema(payments).pick({
  email: true,
  amount: true,
  stripePaymentIntentId: true,
  status: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LicenseKey = typeof licenseKeys.$inferSelect;
export type InsertLicenseKey = z.infer<typeof insertLicenseKeySchema>;
export type Payment = typeof payments.$inferSelect;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
