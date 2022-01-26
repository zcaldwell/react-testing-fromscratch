import React from 'react';
import { useState, useEffect } from 'react';
import CharacterList from '../Components/CharacterList/CharacterList';
import { getCharacters } from '../services/characters';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <>
        <CharacterList characters={characters} setLoading={setLoading} loading={loading} />
      </>
    </div>
  );
}
