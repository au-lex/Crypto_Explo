import React, { useEffect, useState } from 'react';
import HeaderFooter from '../Component/Header/HeaderFooter';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const APi_key = "c31a3541566f464d989174dd824d6077";
  const NewsperPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${APi_key}&pageSize=${NewsperPage}&page=${currentPage}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        const sortedArticles = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
        setNews(sortedArticles);
        setTotalPage(Math.ceil(data.totalResults / NewsperPage));
        
      } catch(error) {
        setError(error.message);
      } finally {
        setLoading(false); // Reset loading to false once the data is fetched or if there's an error
      }
    }

    fetchNews();
  }, [currentPage]);

  const timeSincePublished = (publishedAt) => {
    const now = new Date();
    const publishDate = new Date(publishedAt);
    const differenceInMilliseconds = now - publishDate;
    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    if (differenceInHours < 24) {
      return `${differenceInHours}hrs ago`;
    } else {
      const days = Math.floor(differenceInHours / 24);
      return days === 1 ? `${days} day ago` : ` ${days} days ago`;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2 className='text-white font-bold text-[2rem] text-center  pb-[3rem]'>Crypto News</h2>
      <ul className='flex flex-wrap'>
        {news && news.map((article, index) => (
          <li key={index} className="newsItem  bg-gray-800 shadow-lg rounded p-4">
            <div className=''>
              <img src={article.urlToImage} alt={article.title} className="image" />
            </div>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <p  className="headline pt-2"> {article.title}</p>
              <p className="description text-slate-400">
                {article.description.length > 10 ? 
                  `${article.description.substring(0, 80)}...` : 
                  article.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
      
      {/* <div className="paginationContro mb-[10rem] space-x-10">
        <button 
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo(0, 0); 
          }} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button 
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo(0, 0); 
          }}
        >
          Next
        </button>
      </div> */}
  
      <HeaderFooter />
    </div>
  );
};

export default News;
