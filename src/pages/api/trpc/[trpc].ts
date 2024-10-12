import { appRouter } from '../../../server/router'; // Path to your appRouter
import * as trpcNext from '@trpc/server/adapters/next'; // Correct handler for Next.js API routes in tRPC v10
import { NextApiRequest, NextApiResponse } from 'next';

// Create the context function for your tRPC router
const createContext = ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
  // You can return any context required for your tRPC procedures, e.g., session data, DB instance, etc.
  return {};
};

// Next.js API handler for tRPC
export default trpcNext.createNextApiHandler({
  router: appRouter,  // The tRPC router you defined
  createContext,      // Context function
});
