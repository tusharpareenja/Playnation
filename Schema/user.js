const { boolean, timestamp, pgTable, text, primaryKey, integer } = require("drizzle-orm/pg-core");
const postgres = require("postgres");
const { drizzle } = require("drizzle-orm/postgres-js");

const connectionString = "postgresql://neondb_owner:npg_zoa1vLu2qUEH@ep-late-rice-a8yicbo5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require";
const pool = postgres(connectionString, { max: 1 });

const db = drizzle(pool);

const users = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role").notNull().default("user"),
});

const accounts = pgTable(
  "account",
  {
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey(account.provider, account.providerAccountId),
  ]
);

const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    primaryKey(verificationToken.identifier, verificationToken.token),
  ]
);

const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    primaryKey(authenticator.userId, authenticator.credentialID),
  ]
);

module.exports = { db, users, accounts, sessions, verificationTokens, authenticators };
