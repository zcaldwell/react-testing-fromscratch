import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';
import { useState } from 'react';

export default function CharacterList({ characters }) {
  const [order, setOrder] = useState('N/A');
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('');

  function filterCharacters() {
    return characters
      .sort((a, b) => {
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
      })
      .filter((character) => {
        return character.fullName.includes(query);
      })
      .filter((character) => {
        return character.family.includes(family);
      });
  }

  return (
    <>
      <div className="input-container">
        <div className="search-input">
          <input
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div>
          <label>
            Order
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="n/a">N/A</option>
              <option value="asc">Ascending</option>
              <option value="dsc">Descending</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            House
            <select value={family} onChange={(e) => setFamily(e.target.value)}>
              <option value="">All</option>
              <option value="Stark">Stark</option>
              <option value="Bolton">Bolton</option>
              <option value="Free Folk">Free Folk</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <ul className="characterList">
          {filterCharacters().map((character) => {
            return (
              <li className="list" key={character.id}>
                <CharacterCard character={character} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
