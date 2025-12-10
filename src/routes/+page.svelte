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
	<section id="about" aria-labelledby="about-title">
		<h2 id="about-title">About</h2>
		<p>
			Welcome to my projects portfolio! Here you'll find a selection of my work, showcasing my
			skills and creativity across various domains. Each project reflects my dedication to quality
			and innovation. Feel free to explore and learn more about the projects that inspire me.
		</p>
	</section>
	<section id="projects" aria-labelledby="projects-title">
		<h2 id="projects-title">{heading}</h2>
		<ul>
			{#each data.projects as project (project.slug)}
				<ProjectItem {project} state={project.published ? 'default' : 'disabled'} />
			{/each}
		</ul>
	</section>
</main>
