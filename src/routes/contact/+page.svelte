<script lang="ts">
	import { enhance } from '$app/forms';
	import { CONTACT_TOPICS, type ContactTopic } from '$lib/contact';
	import type { ActionData } from './$types';

	let { form } = $props<{ form: ActionData }>();

	const topicLabels: Record<ContactTopic, string> = {
		design: 'Design',
		music: 'Music',
		pebbles: 'Pebbles',
		femfolk: 'Femfolk'
	};

	const issues = $derived(form?.issues ?? {});
</script>

<section id="contact" aria-labelledby="contact-title">
	<h2 id="contact-title">Contact</h2>
	<p>Parlons design, musique ou simplement du projet qui vous occupe.</p>

	{#if form?.success}
		<p class="status success">Merci pour votre message, je reviens vers vous très vite.</p>
	{:else if form?.error}
		<p class="status error">{form.error}</p>
	{/if}

	<form method="post" use:enhance>
		<div class="fields">
			<div class="field">
				<label for="name">Nom *</label>
				<input
					id="name"
					name="name"
					required
					autocomplete="name"
					aria-invalid={Boolean(issues.name?.length)}
					aria-describedby={issues.name?.length ? 'name-error' : undefined}
				/>
				{#if issues.name?.length}
					<p class="field-error" id="name-error">{issues.name[0]}</p>
				{/if}
			</div>
			<div class="field">
				<label for="email">Email *</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					autocomplete="email"
					aria-invalid={Boolean(issues.email?.length)}
					aria-describedby={issues.email?.length ? 'email-error' : undefined}
				/>
				{#if issues.email?.length}
					<p class="field-error" id="email-error">{issues.email[0]}</p>
				{/if}
			</div>
			<div class="field">
				<label for="phone">Téléphone (optionnel)</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					inputmode="tel"
					pattern="[0-9+(). -]*"
					aria-invalid={Boolean(issues.phone?.length)}
					aria-describedby={issues.phone?.length ? 'phone-error' : undefined}
				/>
				{#if issues.phone?.length}
					<p class="field-error" id="phone-error">{issues.phone[0]}</p>
				{/if}
			</div>
			<div class="field">
				<label for="url">Lien (optionnel)</label>
				<input
					id="url"
					name="url"
					type="url"
					inputmode="url"
					placeholder="https://exemple.com"
					aria-invalid={Boolean(issues.url?.length)}
					aria-describedby={issues.url?.length ? 'url-error' : undefined}
				/>
				{#if issues.url?.length}
					<p class="field-error" id="url-error">{issues.url[0]}</p>
				{/if}
			</div>
			<div class="field">
				<label for="topic">Sujet *</label>
				<select
					id="topic"
					name="topic"
					required
					aria-invalid={Boolean(issues.topic?.length)}
					aria-describedby={issues.topic?.length ? 'topic-error' : undefined}
				>
					<option value="" disabled selected hidden>Choisir</option>
					{#each CONTACT_TOPICS as topic (topic)}
						<option value={topic}>{topicLabels[topic]}</option>
					{/each}
				</select>
				{#if issues.topic?.length}
					<p class="field-error" id="topic-error">{issues.topic[0]}</p>
				{/if}
			</div>
		</div>

		<div class="field">
			<label for="message">Message *</label>
			<textarea
				id="message"
				name="message"
				required
				rows="5"
				aria-invalid={Boolean(issues.message?.length)}
				aria-describedby={issues.message?.length ? 'message-error' : undefined}
			></textarea>
			{#if issues.message?.length}
				<p class="field-error" id="message-error">{issues.message[0]}</p>
			{/if}
		</div>

		<input
			type="text"
			name="company"
			class="honeypot"
			tabindex="-1"
			autocomplete="off"
			aria-hidden="true"
		/>

		<button type="submit">Envoyer</button>
	</form>
</section>

<style>
	section {
		max-width: 800px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.fields {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	label {
		font-size: 0.95rem;
		color: var(--secondary);
	}
	input,
	select,
	textarea {
		width: 100%;
		border-radius: 0.75rem;
		border: 1px solid var(--border-color);
		background: var(--ghost);
		color: var(--foreground);
		padding: 0.9rem 1rem;
		font: inherit;
	}
	select {
		cursor: pointer;
	}
	textarea {
		resize: vertical;
		min-height: 180px;
	}
	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--secondary);
		outline: none;
	}
	.field-error {
		color: #f5b6b6;
		font-size: 0.9rem;
	}
	.status {
		padding: 0.85rem 1rem;
		border-radius: 0.75rem;
		font-size: 0.95rem;
		max-width: 720px;
	}
	.status.success {
		border: 1px solid var(--border-color);
		background: rgba(255, 255, 255, 0.08);
	}
	.status.error,
	.field-error {
		background: rgba(255, 128, 128, 0.05);
	}
	button {
		align-self: flex-start;
		background: var(--foreground);
		color: var(--background);
		border: none;
		border-radius: 999px;
		padding: 0.85rem 1.8rem;
		font: inherit;
		cursor: pointer;
		transition:
			transform 0.15s ease,
			opacity 0.15s ease;
	}
	button:hover {
		opacity: 0.9;
		transform: translateY(-2px);
	}
	button:active {
		transform: translateY(0);
	}
	.honeypot {
		position: absolute;
		left: -9999px;
	}
</style>
