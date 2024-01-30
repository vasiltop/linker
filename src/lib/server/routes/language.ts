import { procedure, router } from '$lib/trpc';
import { z } from 'zod';
import { db } from '../db';
import { language } from '../db/schema';
import { Language } from '../schema';
import { eq, ilike, sql } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';
import { authorizedProcedure } from '$lib/trpc';
import showdown from 'showdown';
import sanitizeHtml from 'sanitize-html';

export const app = router({
	getAll: procedure
		.input(z.void())
		.output(Language.array())
		.query(() => {
			return db.select().from(language);
		}),
	getOne: procedure
		.input(z.string())
		.output(Language)
		.query(async ({ input }) => {
			const data = await db.query.language.findFirst({
				where: eq(language.id, input),
			});

			if (!data) {
				throw new TRPCError({
					message: 'Could not find this id.',
					code: 'NOT_FOUND',
				});
			}

			return data;
		}),
	create: authorizedProcedure
		.input(
			z.object({
				name: z.string().min(1).max(255),
				description: z.string().min(4).max(256),
				markdown: z.string().min(4).max(4096),
			})
		)
		.output(z.void())
		.mutation(async ({ input, ctx }) => {
			const converter = new showdown.Converter();
			const html = converter.makeHtml(input.markdown);
			const cleanHtml = sanitizeHtml(html);

			await db.insert(language).values({
				...input,
				userId: ctx.session.user.userId,
				markdown: cleanHtml,
			});
		}),
	search: procedure
		.input(z.string())
		.output(Language.array())
		.query(({ input }) => {
			return db
				.select()
				.from(language)
				.where(ilike(language.name, `%${input}%`));
		}),
	getRecommended: procedure
		.input(z.void())
		.output(Language.array())
		.query(() => {
			return db
				.select()
				.from(language)
				.orderBy(sql`random()`)
				.limit(6);
		}),
});

export default app;
export type Router = typeof app;
