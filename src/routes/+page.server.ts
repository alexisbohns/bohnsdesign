import { baseLocale, getLocale } from '$lib/paraglide/runtime.js';
import { getAllProjects, type Locale, type Project } from '$lib/server/content/projects';
import type { PageServerLoad } from './$types';

type SerializableProject = Omit<Project, 'component'>;

export const prerender = true;

export const load: PageServerLoad = async () => {
	const locale = (getLocale() ?? baseLocale) as Locale;

	const projectsWithComponents = getAllProjects(locale);
	const projects: SerializableProject[] = projectsWithComponents.map(
		({ component, ...project }) => project
	);

	if (projects.length) {
		return { locale, projects };
	}

	const fallbackLocale = baseLocale as Locale;
	return {
		locale: fallbackLocale,
		projects: getAllProjects(fallbackLocale).map(({ component, ...project }) => project)
	};
};
