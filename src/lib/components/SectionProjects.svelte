<script lang="ts">
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import type { Project } from '$lib/server/content/projects';

	type ProjectListItem = Omit<Project, 'component'>;

	const {
		heading,
		projects,
		id = 'projects'
	} = $props<{ heading: string; projects: ProjectListItem[]; id?: string }>();

	const titleId = $derived(`${id}-title`);
</script>

<section {id} aria-labelledby={titleId}>
	<h2 id={titleId}>{heading}</h2>
	<ul>
		{#each projects as project (project.slug)}
			<ProjectItem {project} state={project.published ? 'default' : 'disabled'} />
		{/each}
	</ul>
</section>
