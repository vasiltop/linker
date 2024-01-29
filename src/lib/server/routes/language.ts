import { procedure, router } from '$lib/trpc';
import { z } from 'zod';
import { db } from '../db';
import { language } from '../db/schema';
import { Language } from '../schema';

export const app = router({
	get: procedure
		.input(z.void())
		.output(Language.array())
		.query(() => {
			return db.select().from(language);
		}),

	create: procedure
		.input(
			z.object({
				/*
				languageType: z.enum([
					'functional',
					'object-oriented',
					'logical',
					'imperative',
					'procedural',
					'event-driven',
				]),
				compiled: z.boolean(),
				*/
				name: z.string().min(1).max(255),
				description: z.string().min(4).max(2048),
			})
		)
		.output(z.void())
		.mutation(async ({ input }) => {
			await db.insert(language).values(input);
		}),
});

export default app;
export type Router = typeof app;
