// src/components/PokemonList.tsx
import React from 'react';

// Define the type for a single Pokémon
interface Pokemon {
  id: number;
  name: string;
  type: string;
  sprite: string;
}

// Define the props interface for the PokemonList component
interface PokemonListProps {
  pokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList.length === 0 ? (
        <p>No Pokémon found</p> // Show message if no Pokémon
      ) : (
        pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="border p-4 mb-4">
            <img src={pokemon.sprite} alt={pokemon.name} className="w-24 h-24" />
            <h3 className="text-xl">{pokemon.name}</h3>
            <p>Type: {pokemon.type}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PokemonList;
