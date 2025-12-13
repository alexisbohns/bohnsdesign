<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime.js';
	import type { Locale } from '$lib/server/content/projects';

	const { id = 'about' } = $props<{ id?: string }>();
	const titleId = $derived(`${id}-title`);

	const locale = $derived(getLocale() as Locale);

	const HEADINGS: Record<Locale, string> = {
		en: 'Who',
		fr: 'Qui',
		nb: 'Hvem'
	};

	const BIOS: Record<Locale, string> = {
		en: `Driven by a need to understand and guided by the desire to create value for others, I express myself through service design, music, writing, and podcasting. I take pride only in projects that heal and elevate, experiences that inspire and resonate, spaces that connect and bring people together. I honor the riddles of complexity as much as the elegance of simplicity. I am deaf to authority, blind to borders, and mute to certainties.`,
		fr: `Animé par le besoin de comprendre et guidé par l'envie d'offrir de la valeur aux autres, je m'exprime à la fois au travers du design de service, de la musique, de l'écriture et du podcast. Ma fierté ne saurait provenir d'autres projets que ceux qui aident et qui améliorent, d'expériences qui inspirent et qui touchent, des espaces qui rassemblent et qui rapprochent. J'aime la nécessité de la complexité autant que l'élégance de la simplicité. Je suis sourd à l'autorité, aveugle aux frontières et muet aux évidences.`,
		nb: `Drevet av et behov for å forstå og veiledet av et ønske om å skape verdi for andre, uttrykker jeg meg gjennom tjenestedesign, musikk, skriving og podkasting. Jeg er bare stolt av prosjekter som helbreder og løfter, opplevelser som inspirerer og resonerer, rom som forbinder og bringer folk sammen. Jeg ærer kompleksitetens gåter like mye som enkelhetens eleganse. Jeg er døv for autoritet, blind for grenser og stum for sikkerhet.`
	};

	const heading = $derived(HEADINGS[locale] ?? HEADINGS.en);
	const bio = $derived(BIOS[locale] ?? BIOS.en);
</script>

<section {id} aria-labelledby={titleId}>
	<h2 id={titleId}>{heading}</h2>
	<p>{bio}</p>
</section>
