<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

	const {
		icon,
		size = 16,
		title
	} = $props<{ icon: IconDefinition; size?: number; title?: string }>();

	const [width, height, , , svgPaths] = $derived(icon.icon);
	const paths = $derived(Array.isArray(svgPaths) ? svgPaths : [svgPaths]);
	const ariaHidden = $derived(title ? undefined : 'true');
	const label = $derived(title ?? icon.iconName);
</script>

<svg
	aria-hidden={ariaHidden}
	aria-label={ariaHidden ? undefined : label}
	viewBox={`0 0 ${width} ${height}`}
	width={size}
	height={size}
	role="img"
	focusable="false"
>
	{#if !ariaHidden}
		<title>{label}</title>
	{/if}
	{#each paths as path (path)}
		<path d={path} fill="currentColor" />
	{/each}
</svg>
