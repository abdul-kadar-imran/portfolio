import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: Vercel needs root base path
  base: "/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
