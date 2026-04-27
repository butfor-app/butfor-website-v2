import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      svg: { multipass: true },
      convertToWebp: true,
    }),
    compression({ algorithm: "brotliCompress" }),
    compression({ algorithm: "gzip" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
