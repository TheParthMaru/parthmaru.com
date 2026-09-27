import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export function projectUrl(value?: string) {
	const url = value?.trim();

	if (!url) return undefined;
	if (url.startsWith("https://") || url.startsWith("http://")) return url;

	return undefined;
}

export function projectDestination(github?: string, demo?: string) {
	return projectUrl(github) ?? projectUrl(demo);
}

export function formatProjectStatus(status?: string) {
	if (!status) return undefined;
	if (status === "in-progress") return "In progress";

	return status;
}

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
	const entries = await getCollection("projects");

	return entries
		.filter((entry) => entry.data.draft !== true)
		.sort((a, b) => {
			if (a.data.featured !== b.data.featured) {
				return a.data.featured ? -1 : 1;
			}

			return a.data.title.localeCompare(b.data.title);
		});
}
