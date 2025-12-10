import type { ComponentType } from 'svelte';
import { z } from 'zod';

export type Locale = 'en' | 'fr' | 'nb';

export const ProjectFM = z.object({
	slug: z.string(),
	title: z.string(),
	description: z.string(),
	logo: z.string(), // ex: "/projects/logos/design.svg"
	links: z.record(z.string().url()).default({}),
	order: z.number().optional(),
	published: z.boolean().default(true)
});
export type ProjectFrontmatter = z.infer<typeof ProjectFM>;
export type Project = ProjectFrontmatter & {
	component: ComponentType;
	filepath: string;
};

type Loaded = {
	metadata: ProjectFrontmatter;
	default: ComponentType; // composant Svelte
	filepath: string;
};

const modules = import.meta.glob<Loaded>('/src/lib/content/projects/*/*.{svx,md}', {
	eager: true
});

export function getAllProjects(locale: Locale): Project[] {
	return Object.entries(modules)
		.filter(([path]) => path.includes(`/projects/${locale}/`))
		.map(([filepath, mod]) => {
			const parsed = ProjectFM.parse(mod.metadata);
			return {
				...parsed,
				component: mod.default,
				filepath
			};
		})
		.filter((p) => p.published)
		.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
	return getAllProjects(locale).find((project) => project.slug === slug);
}
