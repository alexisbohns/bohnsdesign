import { error } from '@sveltejs/kit';
import { baseLocale, getLocale } from '$lib/paraglide/runtime.js';
import { getProjectBySlug, type Locale, type Project } from '$lib/server/content/projects';
import type { PageServerLoad } from './$types';

type SerializableProject = Omit<Project, 'component'>;

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const requestedLocale = (getLocale() ?? baseLocale) as Locale;
	const project = getProjectBySlug(requestedLocale, params.slug);

	if (project) {
		const { component: _component, ...projectData } = project;
		return { locale: requestedLocale, project: projectData satisfies SerializableProject };
	}

	const fallbackLocale = baseLocale as Locale;
	const fallbackProject = getProjectBySlug(fallbackLocale, params.slug);

	if (!fallbackProject) {
		throw error(404, 'Not found');
	}

	const { component: _component, ...projectData } = fallbackProject;
	return { locale: fallbackLocale, project: projectData satisfies SerializableProject };
};
