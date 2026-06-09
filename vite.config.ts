import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",
    lib: {
      entry: "src/main.tsx",
      formats: ["es"],
      fileName: () => "tablet-info-card.js",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
