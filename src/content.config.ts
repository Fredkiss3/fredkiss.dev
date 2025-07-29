import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { locales } from "~/i18n/config.mjs";

const siteInfoCollection = defineCollection({
  loader: glob({
    pattern: locales.map((locale) => `${locale}.json`),
    base: "./src/data/site-info"
  }),
  schema: z.object({
    description: z.string().min(1),
    jobTitle: z.string().min(1),
    linkTitles: z.object({
      home: z.string().min(1),
      resume: z.string().min(1)
    }),
    bio: z.string().min(1)
  })
});

const workExperienceCollection = defineCollection({
  loader: glob({ pattern: "work/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    company: z.string().min(1),
    jobTitle: z.object({
      en: z.string().min(1),
      fr: z.string().min(1).optional()
    }),
    type: z.enum(["full-time", "freelance"]).default("full-time"),
    link: z.string().url(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    stack: z
      .array(
        z.object({
          name: z.string(),
          link: z.string().url().optional()
        })
      )
      .default([])
  })
});

const projectCollection = defineCollection({
  loader: glob({ pattern: "projects/*.{md,mdx}", base: "./src/content" }),

  schema: z.object({
    name: z.string().min(1),
    repository: z.string().url(),
    link: z.string().url().optional(),
    roles: z
      .array(z.enum(["creator", "maintainer", "contributor"]))
      .default(["creator", "maintainer"]),
    startDate: z.coerce.date(),
    image: z.union([
      z.string().min(1),
      z.object({
        light: z.string().min(1),
        dark: z.string().min(1)
      })
    ])
  })
});

export const collections = {
  work: workExperienceCollection,
  projects: projectCollection,
  site: siteInfoCollection
};
