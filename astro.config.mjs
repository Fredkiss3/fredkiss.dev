// @ts-check
import path from "node:path";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
const __dirname = import.meta.dirname;

// https://astro.build/config
export default defineConfig({
  site: "https://fredkiss.dev",
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
