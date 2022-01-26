import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';
import { useState } from 'react';

export default function CharacterList({ characters }) {
  const [order, setOrder] = useState('N/A');

  function filterCharacters() {
    return characters.sort((a, b) => {
      if (order === 'asc') {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      } else if (order === 'dsc') {
        if (a.firstName > b.firstName) {
          return -1;
        }
        if (a.firstName < b.firstName) {
          return 1;
        }
        return 0;
      }
    });
  }

  return (
    <>
      <div>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="n/a">N/A</option>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
      <div>
        <ul className="characterList">
          {filterCharacters().map((character) => {
            return (
              <li className="list" key={character.name}>
                <CharacterCard character={character} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
