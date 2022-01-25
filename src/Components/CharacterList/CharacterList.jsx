import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';

export default function CharacterList({ characters }) {
  return (
    <div>
      <ul className="characterList">
        {characters.map((character) => {
          return (
            <li className="list" key={character.name}>
              <CharacterCard character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
