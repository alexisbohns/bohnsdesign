<script lang="ts">
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import {
		PROJECT_LINK_ICONS,
		getProjectLinkLabel,
		isProjectLinkKey,
		type ProjectLinkKey
	} from '$lib/constants/project-links';
	import type { ComponentType } from 'svelte';
	import type { Locale } from '$lib/server/content/projects';
	import type { PageData } from './$types';

	type ContentModule = { default: ComponentType };

	const contentModules = import.meta.glob<ContentModule>('/src/lib/content/projects/*/*.svx');

	let { data } = $props<{ data: PageData }>();

	const project = $derived(data.project);
	const locale = $derived(data.locale as Locale);
	const projects = $derived(data.projects ?? []);
	const contentModule = $derived(contentModules[project.filepath]);
	const contentPromise = $derived(contentModule ? contentModule() : null);
	const linkEntries: [ProjectLinkKey, string][] = $derived(
		(Object.entries(project.links ?? {}) as [string, string][]).flatMap(([key, url]) =>
			isProjectLinkKey(key) ? [[key, url]] : []
		)
	);
</script>

<main>
	<nav aria-label="Project navigation" class="project-rail">
		<ul>
			{#each projects as navProject (navProject.slug)}
				<ProjectItem
					project={navProject}
					variant="compact"
					state={navProject.slug === project.slug ? 'default' : 'inactive'}
					isCurrent={navProject.slug === project.slug}
				/>
			{/each}
		</ul>
	</nav>
	<article>
		<header>
			<h1 class="project-title">{project.title}</h1>
			<p class="project-description">{project.description}</p>
			{#if linkEntries.length}
				<section aria-label="External links" class="project-links">
					<ul>
						{#each linkEntries as [key, url] (key)}
							{@const icon = PROJECT_LINK_ICONS[key]}
							{@const label = getProjectLinkLabel(key, locale)}
							<li>
								<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
									<Icon icon={icon} size={18} />
									<span>{label}</span>
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
</main>

<style>
	article {
		padding: 2rem;
		@media screen and (min-width: 800px) {
			padding: var(--spacer-lg);
		}
	}
	.project-rail {
		@media screen and (min-width: 800px) {
			padding: 0 var(--spacer-lg);
			position: sticky;
			z-index: 1;
			top: 0;
		}
	}
	.project-rail ul {
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);

		@media screen and (min-width: 800px) {
			background-color: var(--background);
			border-top: none;
			border-radius: 0 0 1rem 1rem;
		}
		list-style: none;
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}
	header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	h1.project-title {
		margin: 0;
		font-size: var(--spacer-lg);
	}
	p.project-description {
		margin: 0;
		font-size: 1.5rem;
		opacity: 0.5;
	}
	.project-links {
		margin: 1rem 0;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		padding: 0.5rem 0;
		user-select: none;
	}
	.project-links ul {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		padding: 0;
		list-style: none;
		margin-bottom: 0;
	}
	.project-links li {
		font-size: 1.1rem;
		line-height: 1;
		margin: 0;
		list-style-type: none;
		padding-left: 0;
	}
	.project-links a {
		color: inherit;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		padding: 0.5rem;
		border-radius: 0.25rem;
		transition: background-color 0.2s ease-in-out;
	}
	.project-links a:hover {
		background-color: var(--border-color);
		opacity: 1;
	}
</style>
