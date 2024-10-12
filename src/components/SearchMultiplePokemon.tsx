// src/components/SearchMultiplePokemon.tsx
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

const SearchMultiplePokemon = () => {
  const [names, setNames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]); // Correctly typed

  const query = trpc.getPokemonByNames.useQuery(names, {
    enabled: false, // Disable automatic fetching
    onSuccess: (data  : Pokemon[]) => setPokemonList(data), // Set fetched data to pokemonList
  });

  const handleSearch = () => {
    if (names.length > 0) {
      query.refetch(); // Refetch the data when the search is triggered
    }
  };

  const addName = () => {
    if (inputValue.trim()) {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2"
      />
      <button onClick={addName} className="ml-2 p-2 bg-blue-500 text-white">
        Add Pokémon Name
      </button>
      <button onClick={handleSearch} className="ml-2 p-2 bg-green-500 text-white">
        Search All
      </button>
      {pokemonList.length > 0 && <PokemonList pokemonList={pokemonList} />}
    </div>
  );
};

export default SearchMultiplePokemon;
