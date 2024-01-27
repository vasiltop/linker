import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

import router from '$lib/server/routes';
import { createContext } from '$lib/server/context';
import { auth } from '$lib/server/lucia';
import { sequence } from '@sveltejs/kit/hooks';

export const handleTrpc: Handle = createTRPCHandle({
	router,
	createContext,
	url: '/api',
});

const handleAuth: Handle = ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return resolve(event);
};

export const handle = sequence(handleAuth, handleTrpc);
