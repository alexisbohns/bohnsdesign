<script lang="ts">
	import type { Project } from '$lib/server/content/projects';

	type ProjectListItem = Omit<Project, 'component'>;

	const { project } = $props<{ project: ProjectListItem }>();
</script>

<li>
	<a href={`/projects/${project.slug}`} aria-label={`${project.title} project`}>
		<img src={project.logo} alt={project.title} class="project-item-logo" />
		<div class="project-item-content">
			<h3 class="project-item-title">{project.title}</h3>
			<p class="project-item-description">{project.description}</p>
		</div>
	</a>
</li>

<style>
	li {
		margin-bottom: 2.5rem;
	}
	a {
		display: flex;
		align-items: start;
		gap: 1.5rem;
		@media screen and (min-width: 720px) {
			align-items: center;
			gap: 2.5rem;
		}
	}
	.project-item-logo {
		min-width: 3.5rem;
		width: 3.5rem;
		border-radius: 0.5rem;
		@media screen and (min-width: 720px) {
			min-width: 6.5rem;
			width: 6.5rem;
			border-radius: 1rem;
		}
	}
	.project-item-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.project-item-title {
		margin: 0;
		line-height: 1;
		font-size: 1.8rem;
		@media screen and (min-width: 720px) {
			font-size: 2rem;
		}
	}
	.project-item-description {
		margin: 0;
		font-size: 1rem;
		opacity: 0.5;
		@media screen and (min-width: 720px) {
			font-size: 1.25rem;
		}
	}
</style>
