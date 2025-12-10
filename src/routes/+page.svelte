<script lang="ts">
	import type { Locale } from '$lib/server/content/projects';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const headingByLocale: Record<Locale, string> = {
		en: 'Projects',
		fr: 'Projets',
		nb: 'Prosjekter'
	};

	const locale = $derived(data.locale as Locale);
	const heading = $derived(headingByLocale[locale] ?? headingByLocale.en);
</script>

<main>
	<section id="projects" aria-labelledby="projects-title">
		<h2 id="projects-title">{heading}</h2>
		<ul>
			{#each data.projects as project (project.slug)}
				<ProjectItem {project} state={project.published ? 'default' : 'disabled'} />
			{/each}
		</ul>
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding: 2rem;
		@media screen and (min-width: 800px) {
			min-height: 100vh;
			min-height: 100dvh;
			gap: var(--spacer-lg);
			padding: var(--spacer-lg);
		}
	}
	h2 {
		font-family: 'Space Grotesk', sans-serif;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		font-size: var(--spacer-lg);
		opacity: 0.1;
		font-weight: bold;
	}
</style>
