<script lang="ts">
	const { id = 'about' } = $props<{ id?: string }>();
	const titleId = $derived(`${id}-title`);
</script>

<section {id} aria-labelledby={titleId}>
	<h2 id={titleId}>About</h2>
	<p>
		Welcome to my projects portfolio! Here you'll find a selection of my work, showcasing my skills
		and creativity across various domains. Each project reflects my dedication to quality and
		innovation. Feel free to explore and learn more about the projects that inspire me.
	</p>
</section>
