import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title").notNull().default(""),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  country: text("country").notNull(),
  projectType: text("project_type").notNull(),
  challenge: text("challenge").notNull(),
  existingTools: text("existing_tools").notNull().default(""),
  timeline: text("timeline").notNull().default(""),
  budget: text("budget").notNull().default("To be discussed"),
  additionalInfo: text("additional_info").notNull().default(""),
  privacyConsent: integer("privacy_consent", { mode: "boolean" }).notNull().default(true),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
