import { procedure, router } from '$lib/trpc';

export const app = router({
	greeting: procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
});

export default app;
export type Router = typeof app;
