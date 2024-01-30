import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) return redirect(302, '/login');

	return {};
}) satisfies PageServerLoad;
