<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Spiracle from '$lib/components/Spiracle.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<header>
		<Spiracle />
		<div class="header-content">
			<div class="header-logotype"><b>alexis</b>bohn<sup>s</sup></div>
			<nav aria-label="Main navigation" class="header-navigation">
				<ol class="header-navigation-list">
					<li class="header-navigation-item"><a href="#projects" class="active">Projects</a></li>
					<li class="header-navigation-item"><a href="#feed">Feed</a></li>
					<li class="header-navigation-item"><a href="#contact">Contact</a></li>
				</ol>
			</nav>
		</div>
	</header>

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
	header {
		display: flex;
		flex-direction: column;
		align-items: start;
		position: sticky;
		width: 100%;
		user-select: none;
		@media screen and (min-width: 800px) {
			max-width: 28rem;
			align-items: end;
			position: sticky;
			top: 0;
		}
	}
	.header-logotype {
		font-size: var(--spacer-lg);
		font-style: normal;
		font-weight: 300;
	}
	.header-logotype b {
		font-family: 'Gloock', serif;
	}
	.header-logotype sup {
		font-style: normal;
		font-family: 'Gloock', serif;
		opacity: 0.3;
	}
	.header-content {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
		padding: 2rem;
		@media screen and (min-width: 800px) {
			margin-top: 1rem;
			padding: 0 0 0 2rem;
			align-items: end;
		}
	}
	ol.header-navigation-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
		@media screen and (min-width: 800px) {
			flex-direction: column;
			align-items: end;
			gap: 0.25rem;
		}
	}
	li.header-navigation-item a {
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.15rem;
		font-size: 1rem;
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.1rem;
		@media screen and (min-width: 800px) {
			gap: 0.5rem;
			flex-direction: row;
		}
	}
	li.header-navigation-item a:hover {
		opacity: 1;
	}
	li.header-navigation-item a::after {
		@media screen and (min-width: 800px) {
			content: '•';
			opacity: 0.3;
		}
	}
	li.header-navigation-item a.active {
		opacity: 1;
		font-weight: bold;
	}
	li.header-navigation-item a.active::after {
		@media screen and (min-width: 800px) {
			content: '•';
			opacity: 1;
		}
	}
</style>
