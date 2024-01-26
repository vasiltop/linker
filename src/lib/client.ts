import { createTRPCProxyClient, httpLink } from '@trpc/client';
import type { Router } from '$lib/server/routes';

export const trpc = createTRPCProxyClient<Router>({
	links: [
		httpLink({
			url: 'http://localhost:5173/api',
		}),
	],
});
