// @ts-check
import path from "node:path";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
const __dirname = import.meta.dirname;

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],
    vite: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
            },
        },
    },
});