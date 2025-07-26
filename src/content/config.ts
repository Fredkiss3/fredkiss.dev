import { defineCollection, z } from "astro:content";

const workExperienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string().min(1),
    jobTitle: z.string().min(1),
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
  type: "content",
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
  projects: projectCollection
};
