import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { auth } from '$lib/server/lucia';

const Input = z.object({
	username: z.string().min(4).max(39),
	password: z.string().min(8).max(255),
});

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) return redirect(302, '/');

	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		const result = Input.safeParse({
			username,
			password,
		});

		if (!result.success) {
			return fail(400, {
				body: {
					message: result.error.issues[0].message,
				},
			});
		}

		try {
			const key = await auth.useKey(
				'username',
				result.data.username.toLowerCase(),
				result.data.password
			);

			const session = await auth.createSession({
				userId: key.userId,
				attributes: {},
			});

			locals.auth.setSession(session);
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === 'AUTH_INVALID_KEY_ID' ||
					e.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, {
					message: 'Incorrect username or password',
				});
			}

			return fail(500, {
				message: 'An unknown error occurred',
			});
		}

		return redirect(302, '/');
	},
};
