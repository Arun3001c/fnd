import React from 'react';
import '../styles/NewsCard.css';
import VerdictTag from './VerdictTag';

const NewsCard = ({ article }) => {
  const getVerdict = (text) => {
    if (text.includes("Trump") && text.includes("removed")) return "Fake";
    if (text.includes("AI") && text.includes("4-Day")) return "Verified";
    return "Alleged";
  };

  const verdict = getVerdict(article.title);

  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      color: "#333",
      width: "300px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}
      
     className={`news-card ${verdict.toLowerCase()}`}>
      <VerdictTag verdict={verdict} />
      <h3>{article.title}</h3>
      <img src={article.image} alt="" />
      <p>{article.description}</p>
      <p><strong>Source:</strong> {article.source.title}</p>
    </div>
  );
};


export default NewsCard;
