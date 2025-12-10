<script lang="ts">
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import { getProjectsHeading } from '$lib/constants/projects';
	import type { Locale } from '$lib/server/content/projects';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const locale = $derived(data.locale as Locale);
	const heading = $derived(getProjectsHeading(locale));
</script>

<main>
	<SectionProjects {heading} projects={data.projects} />
</main>
