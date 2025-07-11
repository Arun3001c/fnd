import './NewsCard';
import './SearchBar';
const searching = () => {
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="news-list">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
      </>
  );
};

export default searching;
