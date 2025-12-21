import { Client } from '@notionhq/client';
import { env } from '$env/dynamic/private';

const token = env.NOTION_TOKEN?.trim();
const databaseId = env.NOTION_DATA_SOURCE_ID?.trim();

if (!token) {
	throw new Error('NOTION_TOKEN is not set');
}

if (!databaseId) {
	throw new Error('NOTION_DATA_SOURCE_ID is not set');
}

export const NOTION_TOKEN = token;
export const NOTION_DATA_SOURCE_ID = databaseId;

export const notion = new Client({
	auth: NOTION_TOKEN
});
