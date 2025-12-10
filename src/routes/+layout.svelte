<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ThemeSwitch />

<div class="layout">
	<Sidebar />
	<main>
		{@render children()}
		<div class="grid">
			<div class="grid-line"></div>
			<div class="grid-line"></div>
			<div class="grid-line"></div>
			<div class="grid-line d"></div>
			<div class="grid-line d"></div>
		</div>
	</main>
</div>

<style>
	.layout {
		@media screen and (min-width: 800px) {
			max-width: 1200px;
			display: grid;
			grid-template-columns: 2fr 3fr;
			position: relative;
			align-items: flex-start;
			gap: var(--spacer-lg);
		}
	}
	main {
		position: relative;
	}
	.grid {
		pointer-events: none;
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		z-index: -1;
		@media screen and (min-width: 800px) {
			position: fixed;
			width: 70dvw;
			height: 100dvh;
			grid-template-columns: repeat(5, 1fr);
		}
	}
	.grid-line {
		border-right: 1px solid var(--ghost);
		width: 1px;
	}
	.grid-line:first-child {
		border-right: none;
	}
	.d {
		display: none;

		@media screen and (min-width: 800px) {
			display: block;
		}
	}
</style>
