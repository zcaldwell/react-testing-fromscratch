import React from 'react';
import { useState, useEffect } from 'react';
import CharacterList from '../Components/CharacterList/CharacterList';
import { getCharacters } from '../services/characters';
import Controls from '../Components/Controls/Controls';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Controls query={query} setQuery={setQuery} />
      <CharacterList characters={characters} />
    </div>
  );
}
