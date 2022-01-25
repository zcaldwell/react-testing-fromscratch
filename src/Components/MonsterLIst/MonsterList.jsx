import React from 'react';
import MonsterCard from '../MonsterCard/MonsterCard';

export default function MonsterList({ monsters }) {
  return (
    <div>
      <ul className="monsterList">
        {monsters.map((monster) => {
          return (
            <li className="list" key={monster.id}>
              <MonsterCard monster={monster} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
