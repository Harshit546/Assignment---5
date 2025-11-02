import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search blogs..."
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
