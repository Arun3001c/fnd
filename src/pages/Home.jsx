// src/pages/Home.jsx
import React, { useState } from 'react';
import { fetchNewsByTag } from '../api/newsApi';

import SearchBar from '../components/SearchBar';
import '../App.css';
import '../components/searching';
import NewsCard from '../components/NewsCard';



function Home() {
  const [news, setNews] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  const handleSearch = async (query) => {
    console.log("Searching for:", query);
    try {
      const articles = await fetchNewsByTag(query);
      console.log("Fetched articles:", articles);
      setNews(articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    
    <div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "3px", marginLeft: "20px" }}>
        <img src="/logo.png" style={{ width:"50px", height: "50px"}}/>
      <h1 className="title">Sensor</h1>
      </div>
      
      <div className='text-container'>
        <h1 className="text">Verify News with Confidence</h1>
        {
          !showComponent && (
            <button className="cta-btn" onClick={handleClick}>
              Try It Now
            </button>
          )
        }
        {showComponent && <SearchBar onSearch={handleSearch} />}

      </div>
      {!showComponent &&
        (
          <section className='container'>
            <p className='container-text'>
              Input a news headline or tag.<br />
              Just like searching on google.<br />
              You get an instant verdict: <strong>Verified</strong>, <strong>Alleged</strong>, or <strong>Fake</strong>.
            </p>
            {/* <video autoPlay loop muted playsInline className="container-video">
              <source src="/landing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </section>
        )}
      {news.length > 0 && (
        <div className="news-list">
          {news.map((article, i) => (
            <NewsCard key={i} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
