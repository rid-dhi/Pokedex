import { router } from './trpc'; // Import base router from trpc.ts
import { pokemonRouter } from '../app/pokemonRouter'; // Import Pokémon router

// Combine routers
export const appRouter = router({
    pokemon: pokemonRouter, // Attach the Pokémon router
});

// Export type definition of the app router for type-safe clients
export type AppRouter = typeof appRouter;

