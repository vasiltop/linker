import { TRPCError, initTRPC } from '@trpc/server';
import type { Context } from './server/context';

export const t = initTRPC.context<Context>().create();
export const procedure = t.procedure;
export const router = t.router;

export const authorizedProcedure = procedure.use(async (opts) => {
	if (opts.ctx.session === null) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return opts.next({
		ctx: {
			session: opts.ctx.session,
		},
	});
});
