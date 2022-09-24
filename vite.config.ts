/// <reference types="vitest" />
/// <reference types="vite/client" />

// Official Vitest example: https://stackblitz.com/github/vitest-dev/vitest/tree/main/examples/react-testing-lib?file=src%2Futils%2Ftest-utils.tsx

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
