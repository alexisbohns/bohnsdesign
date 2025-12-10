<script lang="ts">
	import { faBrush } from '@fortawesome/free-solid-svg-icons';
	import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'bohnsdesign-background';
	const BACKGROUND_KEYS = [
		'--background-bohnsdesign',
		'--background-darkslateblue',
		'--background-midnightblue',
		'--background-darkslategray',
		'--background-dimgray',
		'--background-blackcoffee',
		'--background-bulgarianrose',
		'--background-castletongreen'
	] as const;

	let backgrounds = $state<string[]>([]);
	let backgroundIndex = $state(0);

	const persistBackground = (value: string) => {
		try {
			localStorage.setItem(STORAGE_KEY, value);
		} catch {}
	};

	const applyBackground = (value: string, persist = true) => {
		document.documentElement.style.setProperty('--background', value);
		if (persist) {
			persistBackground(value);
		}
	};

	const cycleBackground = () => {
		if (!backgrounds.length) return;
		backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
		applyBackground(backgrounds[backgroundIndex]);
	};

	onMount(() => {
		const palette = BACKGROUND_KEYS.map((key) =>
			getComputedStyle(document.documentElement).getPropertyValue(key).trim()
		).filter(Boolean);

		const fallback =
			getComputedStyle(document.documentElement).getPropertyValue('--background').trim() ||
			'#18131b';

		backgrounds = palette.length ? palette : [fallback];

		let initialBackground = backgrounds[0] ?? fallback;

		try {
			const storedBackground = localStorage.getItem(STORAGE_KEY);
			if (storedBackground && backgrounds.includes(storedBackground)) {
				initialBackground = storedBackground;
			}
		} catch {}

		backgroundIndex = Math.max(backgrounds.indexOf(initialBackground), 0);
		applyBackground(backgrounds[backgroundIndex], false);
	});
</script>

<button class="theme-switch" type="button" aria-label="Switch background" onclick={cycleBackground}>
	<Icon icon={faBrush} size={18} title="Switch background" />
</button>

<style>
	.theme-switch {
		position: fixed;
		top: 1rem;
		left: 1rem;
		width: 3rem;
		height: 3rem;
		display: grid;
		place-items: center;
		padding: 0;
		border-radius: 999px;
		border: 1px solid var(--border-color);
		background: var(--ghost);
		color: var(--foreground);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		z-index: 5;

		@media screen and (min-width: 800px) {
			top: auto;
			bottom: 2rem;
			left: 2rem;
		}
	}
	.theme-switch:hover {
		transform: translateY(-2px) rotate(-5deg);
		opacity: 0.9;
	}
	.theme-switch:active {
		transform: translateY(0) rotate(360deg) scale(0.7);
	}
</style>
