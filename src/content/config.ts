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
		title: z.string().min(1),
		repository: z.string().url(),
		role: z
			.array(z.enum(["creator", "maintainer", "contributor"]))
			.default(["creator", "maintainer"]),
		startDate: z.coerce.date(),
		image: z.string().min(1),
	}),
});

export const collections = {
	work: workExperienceCollection,
	projects: projectCollection,
};
