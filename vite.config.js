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

const DYNAMIC_ROUTES = [
  ...[1,2,3,4,5,6,7,8,9,10,11].map(id => `/article/${id}`),
  ...[1,2,3].map(id => `/case-studies/${id}`),
  "/webinars/5",
  "/fireside-chat/1",
  "/white-papers/1",
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
    VitePrerender({
      staticDir: path.join(path.dirname(fileURLToPath(import.meta.url)), "dist"),
      routes: [...STATIC_ROUTES, ...DYNAMIC_ROUTES],
      renderer: new VitePrerender.PuppeteerRenderer({
        renderAfterTime: 5000,
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      }),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
