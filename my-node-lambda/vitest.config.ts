import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/.build/**", "**/dist/**"],
  },
  coverage: {
    provider: "v8",
    include: ["src/**/*.ts"],
    exclude: ["src/**/*.test.ts"],
    reporter: ["text", "text-summary"],
  },
});
