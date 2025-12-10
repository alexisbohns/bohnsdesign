import { error } from '@sveltejs/kit';
import { baseLocale, getLocale } from '$lib/paraglide/runtime.js';
import { getAllProjects, type Locale, type Project } from '$lib/server/content/projects';
import type { PageServerLoad } from './$types';

type SerializableProject = Omit<Project, 'component'>;

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const requestedLocale = (getLocale() ?? baseLocale) as Locale;
	const projects = getAllProjects(requestedLocale, { includeUnpublished: true });
	const project = projects.find((item) => item.slug === params.slug);

	if (project) {
		const { component: _component, ...projectData } = project;
		void _component;
		return {
			locale: requestedLocale,
			project: projectData satisfies SerializableProject,
			projects: projects.map((projectWithComponent) => {
				const { component: removedComponent, ...rest } = projectWithComponent;
				void removedComponent;
				return rest satisfies SerializableProject;
			})
		};
	}

	const fallbackLocale = baseLocale as Locale;
	const fallbackProjects = getAllProjects(fallbackLocale, { includeUnpublished: true });
	const fallbackProject = fallbackProjects.find((item) => item.slug === params.slug);

	if (!fallbackProject) {
		throw error(404, 'Not found');
	}

	const { component: _component, ...projectData } = fallbackProject;
	void _component;
	return {
		locale: fallbackLocale,
		project: projectData satisfies SerializableProject,
		projects: fallbackProjects.map((projectWithComponent) => {
			const { component: removedComponent, ...rest } = projectWithComponent;
			void removedComponent;
			return rest satisfies SerializableProject;
		})
	};
};
