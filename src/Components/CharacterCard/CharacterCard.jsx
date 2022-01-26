import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div className="charaterCard">
      <h1>
        {character.firstName} {character.lastName}
      </h1>
      <h2>{character.region}</h2>
      <img className="characterImage" src={character.imageUrl} />
    </div>
  );
}
