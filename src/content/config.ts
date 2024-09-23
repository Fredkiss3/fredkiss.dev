import { defineCollection, z } from "astro:content";

const workExperienceCollection = defineCollection({
	type: "content",
	schema: z.object({
		company: z.string().min(1),
		jobTitle: z.string().min(1),
		link: z.string().url(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	}),
});

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		/* ... */
	}),
});

export const collections = {
	work: workExperienceCollection,
	project: projectCollection,
};
