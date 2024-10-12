import { z } from 'zod'; // For input validation
import { router, publicProcedure } from './trpc'; // Import tRPC setup
import prisma from '../server/prisma'; // Use default import for Prisma client

// Define the Pokémon router with queries and mutations
export const pokemonRouter = router({
    // Fetch all Pokémon
    getPokemon: publicProcedure.query(async () => {
        return prisma.pokemon.findMany(); // Retrieve all Pokémon from the DB
    
    }),

    
    getPokemonByNames: publicProcedure
        .input(z.array(z.string())) // Input validation
        .query((opts) => {
            return {
              greeting: `hello ${opts.input ?? 'world'}`,
            };
          }),
    getPokemonByType: publicProcedure
        .input(z.string()) // Input validation
        .query(async ({ input, ctx }) => {
            // Logic to fetch Pokémon by type
        }),

    // Add a new Pokémon
    addPokemon: publicProcedure
        .input(z.object({
            name: z.string(),   // Name must be a string
            type: z.string(),   // Type must be a string
            sprite: z.string(), // Sprite must be a string
        }))
        .mutation(async ({ input }) => {
            return prisma.pokemon.create({
                data: input, // Insert new Pokémon into DB
            });
        }),
});

export type PokemonRouter = typeof pokemonRouter;

