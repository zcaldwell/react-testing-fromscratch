import React from 'react';

export default function Controls({ query, setQuery }) {
  return (
    <div>
      <label>Search Name</label>
      <input
        value={query}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
