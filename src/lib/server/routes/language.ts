import { procedure, router } from '$lib/trpc';
import { z } from 'zod';
import { db } from '../db';
import { language } from '../db/schema';

export const app = router({
	create: procedure
		.input(
			z.object({
				languageType: z.enum([
					'functional',
					'object-oriented',
					'logical',
					'imperative',
					'procedural',
					'event-driven',
				]),
				name: z.string().min(1).max(255),
				description: z.string().min(8).max(2048),
				compiled: z.boolean(),
			})
		)
		.output(z.void())
		.mutation(async ({ input }) => {
			await db.insert(language).values(input);
		}),
});

export default app;
export type Router = typeof app;
