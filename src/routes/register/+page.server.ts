import { auth } from '$lib/server/lucia.js';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import pg from 'pg';
import type { Actions, PageServerLoad } from './$types';

const Input = z.object({
	username: z.string().min(3).max(255),
	password: z.string().min(8).max(255),
});

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) return redirect(302, '/');

	return {};
}) satisfies PageServerLoad;

export const actions = {
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
				message: result.error.issues[0].message,
			});
		}

		try {
			const username = result.data.username.toLowerCase();

			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username,
					password: result.data.password,
				},
				attributes: {
					username,
				},
			});

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {},
			});

			locals.auth.setSession(session);
		} catch (e) {
			if (e instanceof pg.DatabaseError && e.constraint) {
				return fail(400, {
					message: 'Username already exists',
				});
			}
			console.log(e);
			return fail(400, {
				message: 'An unkonwn error occured',
			});
		}

		return redirect(302, '/');
	},
} satisfies Actions;
