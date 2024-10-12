// src/components/AddPokemon.tsx
import { useState } from 'react';
import { trpc } from '../utils/trpc';

const AddPokemon = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [sprite, setSprite] = useState('');
  const mutation = trpc.pokemon.addPokemon.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({ name, type, sprite });
      alert('Pokémon added successfully!');
    } catch (error) {
      alert('Error adding Pokémon');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
      </div>
      <div>
        <label>Sprite URL:</label>
        <input type="text" value={sprite} onChange={(e) => setSprite(e.target.value)} required />
      </div>
      <button type="submit">Add Pokémon</button>
    </form>
  );
};

export default AddPokemon;
