// src/pages/index.tsx
import { useState } from 'react';
import SearchPokemonByName from '../components/SearchPokemonByName';
import SearchMultiplePokemon from '../components/SearchMultiplePokemon';
import SearchPokemonByType from '../components/SearchPokemonByType';
import AddPokemon from '../components/AddPokemon';

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState('single');

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('single')}>Search by Name</button>
        <button onClick={() => setActiveTab('multiple')}>Search Multiple</button>
        <button onClick={() => setActiveTab('type')}>Search by Type</button>
        <button onClick={() => setActiveTab('add')}>Add Pokémon</button>
      </div>

      <div className="content">
        {activeTab === 'single' && <SearchPokemonByName />}
        {activeTab === 'multiple' && <SearchMultiplePokemon />}
        {activeTab === 'type' && <SearchPokemonByType />}
        {activeTab === 'add' && <AddPokemon />}
      </div>
    </div>
  );
};

export default IndexPage;
