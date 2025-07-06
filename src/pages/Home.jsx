// src/pages/Home.jsx
import React, { useState } from 'react';
import { fetchNewsByTag } from '../api/newsApi';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import '../App.css';
import './Home.css';

function Home() {
  const [news, setNews] = useState([]);

  const handleSearch = async (query) => {
    try {
      const articles = await fetchNewsByTag(query);
      setNews(articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 > Verify News with Confidence</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="news-list">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
