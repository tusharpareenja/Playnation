import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  type: varchar("type", { length: 100 }).notNull(),
  venue: text("venue").notNull(),
  dateFrom: timestamp("date_from").notNull(),
  dateTo: timestamp("date_to").notNull(),
  organizerName: varchar("organizer_name", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 15 }).notNull(),
  bannerPhoto: text("banner_photo"), // URL of the uploaded banner
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
