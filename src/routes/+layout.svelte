<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<Sidebar />

	{@render children()}
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
</style>
