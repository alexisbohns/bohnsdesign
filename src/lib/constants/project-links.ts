import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faBandcamp,
	faBehance,
	faBluesky,
	faDeezer,
	faDiscord,
	faDuolingo,
	faGithub,
	faInstagram,
	faMastodon,
	faMedium,
	faNotion,
	faPatreon,
	faRedditAlien,
	faSoundcloud,
	faSpotify,
	faSquareLinkedin,
	faThreads,
	faWikipediaW,
	faYoutube,
	faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faBookmark, faPodcast } from '@fortawesome/free-solid-svg-icons';
import type { Locale } from '$lib/server/content/projects';

export const PROJECT_LINK_LABELS = {
	linkedin: 'LinkedIn',
	github: 'GitHub',
	threads: 'Threads',
	soundcloud: 'SoundCloud',
	behance: 'Behance',
	instagram: 'Instagram',
	medium: 'Medium',
	substack: 'Substack',
	deezer: 'Deezer',
	spotify: 'Spotify',
	bandcamp: 'Bandcamp',
	youtube: 'YouTube',
	apple_podcasts: 'Apple Podcasts',
	discord: 'Discord',
	mastodon: 'Mastodon',
	bluesky: 'BlueSky',
	duolingo: 'Duolingo',
	notion: 'Notion',
	patreon: 'Patreon',
	whatsapp: 'WhatsApp',
	reddit: 'Reddit',
	wikipedia: 'Wikipedia'
} as const;

export type ProjectLinkKey = keyof typeof PROJECT_LINK_LABELS;

export const PROJECT_LINK_ICONS: Record<ProjectLinkKey, IconDefinition> = {
	linkedin: faSquareLinkedin,
	github: faGithub,
	threads: faThreads,
	soundcloud: faSoundcloud,
	behance: faBehance,
	instagram: faInstagram,
	medium: faMedium,
	substack: faBookmark,
	deezer: faDeezer,
	spotify: faSpotify,
	bandcamp: faBandcamp,
	youtube: faYoutube,
	apple_podcasts: faPodcast,
	discord: faDiscord,
	mastodon: faMastodon,
	bluesky: faBluesky,
	duolingo: faDuolingo,
	notion: faNotion,
	patreon: faPatreon,
	whatsapp: faWhatsapp,
	reddit: faRedditAlien,
	wikipedia: faWikipediaW
};

export const PROJECT_LINK_LABELS_BY_LOCALE: Record<Locale, Record<ProjectLinkKey, string>> = {
	en: PROJECT_LINK_LABELS,
	fr: PROJECT_LINK_LABELS,
	nb: PROJECT_LINK_LABELS
};

export function getProjectLinkLabel(key: ProjectLinkKey, locale: Locale): string {
	return PROJECT_LINK_LABELS_BY_LOCALE[locale]?.[key] ?? PROJECT_LINK_LABELS[key] ?? key;
}

export function isProjectLinkKey(key: string): key is ProjectLinkKey {
	return key in PROJECT_LINK_LABELS;
}
