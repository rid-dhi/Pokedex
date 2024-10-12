import { initTRPC } from '@trpc/server';

// Initialize tRPC
const t = initTRPC.create();

// Export router and procedure creators
export const router = t.router;
export const publicProcedure = t.procedure;

