import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
		src: z.string(),
	}),
});

export const collections = {
	projects: projectsCollection,
};

const skillsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		img_alt: z.string().optional(),
		src: z.string(),
		description: z.string(),
	}),
});

export const list = {
	skills: skillsCollection,
};
