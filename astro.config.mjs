import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: "hybrid",
  adapter: vercel({
    speedInsights: {
      enabled: true
    }
  })
});
