import React from 'react';

export default function MonsterCard({ monster }) {
  console.log(monster);
  return (
    <div>
      <h1>{monster.name}</h1>
    </div>
  );
}
