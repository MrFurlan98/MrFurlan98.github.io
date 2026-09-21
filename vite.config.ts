import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages serves a project repo from a subpath
 * (https://user.github.io/<repo>/), so the built asset URLs need that prefix.
 *
 * The deploy workflow sets VITE_BASE automatically from the repo name.
 * Locally, and for a user site (<user>.github.io), the default "/" is correct.
 */
const base = process.env.VITE_BASE ?? "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
