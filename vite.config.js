import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { compression } from "vite-plugin-compression2";
import VitePrerender from "vite-plugin-prerender";

const STATIC_ROUTES = [
  "/",
  "/product",
  "/pricing",
  "/integrations",
  "/claims-101",
  "/articles",
  "/case-studies",
  "/webinars",
  "/fireside-chats",
  "/white-papers",
  "/butfor-vs-consultants",
  "/butfor-vs-excel",
  "/butfor-vs-internal",
  "/policy-analyzer",
  "/cost-saving-estimator",
  "/sustainability",
  "/careers",
  "/contact",
  "/book_demo",
  "/privacy-policy",
  "/terms-and-conditions",
];

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
    ...(process.env.VERCEL ? [] : [VitePrerender({
      staticDir: path.join(path.dirname(fileURLToPath(import.meta.url)), "dist"),
      routes: STATIC_ROUTES,
      renderer: new VitePrerender.PuppeteerRenderer({
        renderAfterTime: 3000,
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      }),
    })]),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
