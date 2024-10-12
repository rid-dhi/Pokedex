// src/server/pokemonRouter.ts
import { z } from 'zod'; // For input validation
import { router, publicProcedure } from '../server/trpc'; // Import tRPC setup
import prisma from '../server/prisma'; // Import Prisma client

// Define the Pokémon input schema using zod
const pokemonInputSchema = z.object({
  name: z.string(),
  type: z.string(),
  sprite: z.string(),
});

// Define the Pokémon router with queries and mutations
export const pokemonRouter = router({
  // Fetch all Pokémon from the database
  getPokemon: publicProcedure.query(async () => {
    return prisma.pokemon.findMany(); // Returns an array of Pokémon
  }),

  // Fetch Pokémon by names
  getPokemonByNames: publicProcedure
    .input(z.array(z.string())) // Validate input as an array of strings
    .query(async ({ input }) => {
      return prisma.pokemon.findMany({
        where: {
          name: {
            in: input, // Use 'in' to find Pokémon whose names are in the input array
          },
        },
      });
    }),

  // Fetch Pokémon by type
  getPokemonByType: publicProcedure
    .input(z.string()) // Validate input as a string
    .query(async ({ input }) => {
      return prisma.pokemon.findMany({
        where: {
          type: input, // Match the Pokémon type
        },
      });
    }),

  // Add a new Pokémon to the database
  addPokemon: publicProcedure
    .input(pokemonInputSchema) // Validate input using zod schema
    .mutation(async ({ input }) => {
      return prisma.pokemon.create({
        data: input, // Insert new Pokémon into the database
      });
    }),
});

