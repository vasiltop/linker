import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();
export const procedure = t.procedure;
export const router = t.router;
