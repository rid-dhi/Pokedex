import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { PokemonRouter } from '../server/pokemonRouter';  // Import your AppRouter type

// Create a tRPC client for React
export const trpc = createTRPCProxyClient<PokemonRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000',
      }),
    ],
  });
