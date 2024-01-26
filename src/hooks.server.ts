import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

import router from '$lib/server/routes';

export const handle: Handle = createTRPCHandle({ router, url: '/api' });
