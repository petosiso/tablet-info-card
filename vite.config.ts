import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",
    lib: {
      entry: "src/main.ts",
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
