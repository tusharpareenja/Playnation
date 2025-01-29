import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({path: '.env.local'})

export default defineConfig({
  dialect: "postgresql",
  out: "./migration",
  schema: "./Schema/user.js",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_zoa1vLu2qUEH@ep-late-rice-a8yicbo5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
  }
});
