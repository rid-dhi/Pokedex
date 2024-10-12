// src/components/SearchPokemonByType.tsx
import { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonList from './PokemonList';

// Define the Pokémon type
interface Pokemon {
  id: number;
  name: string;
  type: string;
  sprite: string;
}

const SearchPokemonByType = () => {
  const [type, setType] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); // Correctly typed

  const query = trpc.getPokemonByType.useQuery({type}, {
    enabled: false, // Disable automatic fetching
    onSuccess: (data : Pokemon[] ) => setPokemonList(data), // Set fetched data to pokemonList
  });

  const handleSearch = () => {
    if (type.trim()) {
      query.refetch(); // Refetch the data when the search is triggered
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokémon type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">
        Search
      </button>

      {pokemonList.length > 0 && <PokemonList pokemonList={pokemonList} />}
    </div>
  );
};

export default SearchPokemonByType;
