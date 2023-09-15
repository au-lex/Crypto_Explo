import React, { useEffect, useState } from 'react';
import HeaderFooter from '../Component/Header/HeaderFooter';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.currentsapi.services/v1/latest-news?apiKey=rrXAsPtfGrgXIGBe1VrAhszewmFxR3V1-8IyHRo5D8odUB7H&category=cryptocurrency');
        const data = await response.json();
        setNews(data.news);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Crypto News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p className=' bg-red-500 w-[50%]'>{article.description}</p>
          </li>
        ))}
      </ul>

      <HeaderFooter />
    </div>
  );
};

export default News;
