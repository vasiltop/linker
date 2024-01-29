import { z } from 'zod';

export const Language = z.object({
	name: z.string(),
	description: z.string(),
	id: z.string(),
});

export type Language = z.infer<typeof Language>;
