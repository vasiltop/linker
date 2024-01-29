import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { trpc } from '$lib/client';
import { TRPCClientError } from '@trpc/client';

const Input = z.object({
	name: z.string().min(2).max(32),
	description: z.string().min(4).max(128),
});

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return redirect(302, '/login');

	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const name = data.get('name')!.toString();
		const description = data.get('description')!.toString();

		try {
			await trpc.language.create.mutate({
				name,
				description,
			});
		} catch (e) {
			if (e instanceof TRPCClientError) {
				const error = JSON.parse(e.message)[0].message;
				return fail(403, { message: error });
			}

			return fail(500, { message: 'Unknown error occured.' });
		}
		return redirect(302, '/');
	},
};
