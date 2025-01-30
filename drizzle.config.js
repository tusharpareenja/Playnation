import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  out: "./migration",
  schema: ["./Schema/user.js", "./Schema/tournament.js"], // Include multiple schema files
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
