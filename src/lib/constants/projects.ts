import type { Locale } from '$lib/server/content/projects';

const PROJECTS_HEADING_BY_LOCALE: Record<Locale, string> = {
	en: 'What',
	fr: "Quoi",
	nb: 'Hva',
};

export function getProjectsHeading(locale: Locale): string {
	return PROJECTS_HEADING_BY_LOCALE[locale] ?? PROJECTS_HEADING_BY_LOCALE.en;
}
