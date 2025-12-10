<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { PageData } from './$types';

	type ContentModule = { default: ComponentType };

	const contentModules = import.meta.glob<ContentModule>('/src/lib/content/projects/*/*.svx');

	let { data } = $props<{ data: PageData }>();

	const project = $derived(data.project);
	const contentModule = $derived(contentModules[project.filepath]);
	const contentPromise = $derived(contentModule ? contentModule() : null);
	const linkEntries = $derived(Object.entries(project.links ?? {}) as [string, string][]);
</script>

<article>
	<header>
		<img src={project.logo} alt={project.title} />
		<h1>{project.title}</h1>
		<p>{project.description}</p>
		{#if linkEntries.length}
			<section aria-label="External links">
				<ul>
					{#each linkEntries as [key, url]}
						<li>
							<a href={url} target="_blank" rel="noopener noreferrer">
								{key}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</header>

	{#if contentPromise}
		{#await contentPromise then module}
			{@const Content = module.default}
			<Content />
		{/await}
	{/if}
</article>

<style>
	article {
		padding: 2rem;
		@media screen and (min-width: 720px) {
			padding: 2.5rem;
		}
	}
</style>
