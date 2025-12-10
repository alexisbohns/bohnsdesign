<script lang="ts">
	import SectionAbout from '$lib/components/SectionAbout.svelte';
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import type { Locale } from '$lib/server/content/projects';
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
	<SectionAbout />
	<SectionProjects {heading} projects={data.projects} />
</main>
