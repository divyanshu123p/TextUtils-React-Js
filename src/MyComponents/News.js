import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News({ mode }) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`);
      setNews((prevNews) => [...prevNews, ...response.data.hits]);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  };

  const loadMoreNews = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ ...mode, fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{color: 'white', textAlign: 'center' }}>Hacker News</h1>
      <div style={{ backgroundColor: 'white', maxHeight: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {news.map((item) => (
          <div key={item.objectID} style={{ marginBottom: '20px' }}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
              {item.title}
            </a>
            <p style={{ fontSize: '14px', color: '#666' }}>by {item.author}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <button
        onClick={loadMoreNews}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Load More News
      </button>
    </div>
  );
}