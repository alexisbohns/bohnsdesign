<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import Spiracle from '$lib/components/Spiracle.svelte';
	import { deLocalizeHref, getLocale, getUrlOrigin } from '$lib/paraglide/runtime.js';
	import type { Locale } from '$lib/server/content/projects';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	type NavLinkId = 'home' | 'projects' | 'contact';
	type NavPath = '/' | '/projects' | '/contact';

	const NAV_LABELS: Record<Locale, Record<NavLinkId, string>> = {
		en: { home: 'Home', projects: 'Projects', contact: 'Contact' },
		fr: { home: 'Accueil', projects: 'Projets', contact: 'Contact' },
		nb: { home: 'Hjem', projects: 'Prosjekter', contact: 'Kontakt' }
	};

	const NAV_LINKS: { id: NavLinkId; path: NavPath }[] = [
		{ id: 'home', path: '/' },
		{ id: 'projects', path: '/projects' },
		{ id: 'contact', path: '/contact' }
	];

	const locale = $derived(getLocale() as Locale);

	const labels = $derived(NAV_LABELS[locale] ?? NAV_LABELS.en);

	const initialPath = deLocalizeHref(get(page).url.pathname);
	let currentPath = $state(initialPath);

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			currentPath = deLocalizeHref($page.url.pathname);
		});

		return () => unsubscribe();
	});

	const isActive = (href: string) => {
		const pathname = deLocalizeHref(new URL(href, getUrlOrigin()).pathname);
		return currentPath === pathname || currentPath.startsWith(`${pathname}/`);
	};
</script>

<header class="sidebar">
	<Spiracle />
	<div class="header-content">
		<a href={resolve('/')} class="header-logotype">
			<b>alexis</b>bohn<sup>s</sup>
		</a>
		<nav aria-label="Main navigation" class="header-navigation">
			<ol class="header-navigation-list">
				{#each NAV_LINKS as link (link.id)}
					{@const href = resolve(link.path)}
					{@const active = isActive(href)}
					<li class="header-navigation-item">
						<a href={resolve(link.path)} class:active aria-current={active ? 'page' : undefined}>
							{labels[link.id]}
						</a>
					</li>
				{/each}
			</ol>
		</nav>
	</div>
</header>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: start;
		position: sticky;
		width: 100%;
		user-select: none;
		@media screen and (min-width: 800px) {
			max-width: 28rem;
			align-items: end;
			top: 0;
		}
	}
	.header-logotype {
		font-size: var(--spacer-lg);
		font-style: normal;
		font-weight: 300;
		text-decoration: none;
		color: inherit;
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
			gap: 0.8rem;
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
	li.header-navigation-item a:hover,
	li.header-navigation-item a:focus-visible {
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
