import { getCollection, type CollectionEntry } from "astro:content";

export type WritingEntry = CollectionEntry<"writing">;

const publishedDateFormatter = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "short",
	year: "numeric",
	timeZone: "UTC",
});

export function writingPath(entry: WritingEntry) {
	return `/writing/${entry.id}`;
}

export function isPublished(entry: WritingEntry) {
	return entry.data.draft !== true;
}

export function formatWritingDate(date: Date) {
	return publishedDateFormatter.format(date);
}

export async function getWritingEntries(): Promise<WritingEntry[]> {
	return getCollection("writing");
}

export async function getPublishedWriting(): Promise<WritingEntry[]> {
	const entries = await getWritingEntries();

	return entries
		.filter(isPublished)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
