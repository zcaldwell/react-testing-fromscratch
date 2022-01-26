import React from 'react';
import { useState, useEffect } from 'react';
import CharacterList from '../Components/CharacterList/CharacterList';
import { getCharacters } from '../services/characters';
import Controls from '../Components/Controls/Controls';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters(query);
      setCharacters(data);
      setLoading(false);
      console.log(data);
    };

    if (loading) {
      fetchData();
    }
  }, [query, loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <CharacterList characters={characters} setLoading={setLoading} loading={loading} />
        </>
      )}
    </div>
  );
}
