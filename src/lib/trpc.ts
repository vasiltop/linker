import { initTRPC } from '@trpc/server';
import type { Context } from './server/context';

export const t = initTRPC.context<Context>().create();
export const procedure = t.procedure;
export const router = t.router;
