import React from 'react';
import './CharacterCard.css';

export default function CharacterCard({ character }) {
  return (
    <div className="charaterCard">
      <h2>{character.fullName}</h2>
      <h3>{character.family}</h3>
      <h4>{character.title}</h4>
      <img className="characterImage" src={character.imageUrl} />
    </div>
  );
}
