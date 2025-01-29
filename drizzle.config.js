import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({path: '.env.local'})

export default defineConfig({
  dialect: "postgresql",
  out: "./migration",
  schema: "./Schema/user.js",
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
});
