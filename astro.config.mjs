// @ts-check
import path from "node:path";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/config.mjs";

import sitemap from "@astrojs/sitemap";
const __dirname = import.meta.dirname;

// https://astro.build/config
export default defineConfig({
  site: "https://fredkiss.dev",
  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: "redirect"
    }
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    }
  },
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});
