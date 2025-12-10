<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Project } from '$lib/server/content/projects';

	type ProjectListItem = Omit<Project, 'component'>;
	type ProjectVariant = 'default' | 'compact';
	type ProjectState = 'default' | 'inactive' | 'disabled';

	const {
		project,
		variant = 'default',
		state = 'default',
		isCurrent = false
	} = $props<{
		project: ProjectListItem;
		variant?: ProjectVariant;
		state?: ProjectState;
		isCurrent?: boolean;
	}>();

	const ariaCurrent = $derived(isCurrent ? 'page' : undefined);
	const ariaLabel = $derived(
		state === 'default' ? `${project.title} project` : `${project.title} project (${state})`
	);
</script>

<li class={`project-item variant-${variant}`} data-state={state}>
	<a
		href={resolve(`/projects/${project.slug}`)}
		aria-label={ariaLabel}
		aria-current={ariaCurrent}
		class="project-link"
	>
		<img src={project.logo} alt={project.title} class="project-item-logo" />
		<div class="project-item-content">
			<h3 class="project-item-title">{project.title}</h3>
			{#if variant === 'default'}
				<p class="project-item-description">{project.description}</p>
			{/if}
		</div>
	</a>
</li>

<style>
	.project-item {
		list-style: none;
		user-select: none;
	}
	.project-item.variant-default {
		margin-bottom: var(--spacer-lg);
	}
	.project-link {
		display: flex;
		align-items: start;
		gap: 1.5rem;
		text-decoration: none;
		color: inherit;
		opacity: 1;
		transition:
			opacity 0.2s ease-in-out,
			transform 0.2s ease-in-out;
		@media screen and (min-width: 800px) {
			align-items: center;
			gap: var(--spacer-lg);
		}
	}
	.project-item[data-state='inactive'] .project-link,
	.project-item[data-state='disabled'] .project-link {
		opacity: 0.5;
	}
	.project-item[data-state='default'] .project-link {
		opacity: 1;
	}
	.project-link:hover,
	.project-link:focus-visible {
		opacity: 1;
		transform: translateY(-2px);
	}
	.project-link:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 0.2rem;
	}
	.project-item-logo {
		min-width: 3.5rem;
		width: 3.5rem;
		border-radius: 0.5rem;
		@media screen and (min-width: 1000px) {
			min-width: 6.5rem;
			width: 6.5rem;
			border-radius: 1rem;
		}
	}
	.project-item-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}
	.project-item-title {
		margin: 0;
		line-height: 1;
		font-size: 1.8rem;
		@media screen and (min-width: 1000px) {
			font-size: 2rem;
		}
	}
	.project-item-description {
		margin: 0;
		font-size: 1rem;
		opacity: 0.5;
		@media screen and (min-width: 1000px) {
			font-size: 1.25rem;
		}
	}
	.project-item.variant-compact {
		margin-bottom: 0;
	}
	.project-item.variant-compact .project-link {
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		text-align: center;
	}
	.project-item.variant-compact .project-item-logo {
		min-width: 3rem;
		width: 3rem;
		border-radius: 0.75rem;
		@media screen and (min-width: 800px) {
			min-width: 4rem;
			width: 4rem;
		}
	}
	.project-item.variant-compact .project-item-content {
		align-items: center;
	}
	.project-item.variant-compact .project-item-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 1rem;
		letter-spacing: 0.05rem;
	}
</style>
