export const CONTACT_TOPICS = ['design', 'music', 'pebbles', 'femfolk'] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];
