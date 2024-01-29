import { procedure, router } from '$lib/trpc';
import language from './language';

export const app = router({
	greeting: procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	language,
});

export default app;
export type Router = typeof app;
