import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.string().optional(),
		featured: z.boolean().default(false),
		placeholder: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		github: z.string().optional(),
		demo: z.string().optional(),
		hasJournal: z.boolean().default(false),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, writing };
