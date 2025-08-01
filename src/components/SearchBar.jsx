import React, { useState } from 'react';
import { fetchNewsByTag } from '../api/newsApi';
import NewsCard from '../components/NewsCard';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };



  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        placeholder="Enter article tag or name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">check</button>

    </form>
  );
};

export default SearchBar;

