import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { CONTACT_TOPICS } from '$lib/contact';
import { NOTION_DATA_SOURCE_ID, NOTION_TOKEN, notion } from '$lib/notion';
import type { Actions } from './$types';

const optionalString = z
	.string()
	.trim()
	.optional()
	.transform((value) => (value === '' ? undefined : value));

const phoneRegex = /^[0-9+().\s-]+$/;

const schema = z.object({
	name: z.string().trim().min(1, { message: 'Nom requis' }),
	email: z.string().trim().email({ message: 'Email invalide' }),
	phone: optionalString.refine((value) => !value || phoneRegex.test(value), {
		message: 'Numéro invalide'
	}),
	message: z.string().trim().min(1, { message: 'Message requis' }),
	url: optionalString,
	topic: z.enum(CONTACT_TOPICS),
	company: optionalString
});

const normalizeUrl = (value?: string) => {
	if (!value) return undefined;
	const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
	try {
		const url = new URL(withProtocol);
		return url.toString();
	} catch {
		return undefined;
	}
};

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const parsed = schema.safeParse(formData);

		if (!parsed.success) {
			return fail(400, {
				error: 'Validation invalide',
				issues: parsed.error.flatten().fieldErrors
			});
		}

		// Honeypot field — treat as success but do not forward to Notion
		if (parsed.data.company) {
			return { success: true };
		}

		const url = normalizeUrl(parsed.data.url);
		if (parsed.data.url && !url) {
			return fail(400, {
				error: 'Validation invalide',
				issues: { url: ['URL invalide'] }
			});
		}

		const createdAt = new Date().toISOString();
		const { name, email, phone, message, topic } = parsed.data;

		try {
			await notion.pages.create({
				auth: NOTION_TOKEN,
				cover: null,
				icon: null,
				parent: { data_source_id: NOTION_DATA_SOURCE_ID },
				properties: {
					name: { title: [{ text: { content: name } }] },
					email: { email },
					phone: { phone_number: phone ?? null },
					message: { rich_text: [{ text: { content: message } }] },
					url: { url: url ?? null },
					created_at: { date: { start: createdAt } },
					topic: { select: { name: topic } }
				}
			});
			return { success: true };
		} catch (error) {
			console.error('Failed to create contact entry in Notion', error);
			return fail(500, { error: 'Création Notion échouée' });
		}
	}
} satisfies Actions;
