import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  configFile: false,
  root,
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(root, "src/main.jsx"),
      formats: ["es"],
      fileName: () => "passport-hero.js"
    },
    outDir: resolve(root, "assets"),
    cssCodeSplit: false,
    cssFileName: "passport-hero.css",
    rollupOptions: {
      output: {
        chunkFileNames: "passport-[name].js"
      }
    },
    target: "es2022"
  }
});