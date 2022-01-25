import React from 'react';
import { useState, useEffect } from 'react';
import MonsterList from '../Components/MonsterLIst/MonsterList';
import { getMonsters } from '../services/monsters';

export default function Home() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMonsters();
      setMonsters(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <MonsterList monsters={monsters} />
    </div>
  );
}
