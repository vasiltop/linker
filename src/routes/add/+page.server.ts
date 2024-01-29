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
