import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file path and directory name (necessary for compatibility)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the FlatCompat with the base directory of the configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Create ESLint configuration array
const eslintConfig = [
  // Manually import and spread the Next.js configuration rules
  ...compat.extends("next/core-web-vitals"),

  // Additional rules can be added here if needed
  {
    rules: {
      "no-console": "warn", // Example custom rule override
    },
  },
];

export default eslintConfig;
