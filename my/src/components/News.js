import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults]= useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd"
        );
        setNews(response.data.articles);
        setTotalResults(response.data.totalResult);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handlePrevClick = async () => {
    console.log("previous");
    let url = "https://newsapi.org/v2/top-headlines?country=us}&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    setNews(parsedData.articles);
  };

  const handleNextClick = async () => {
    console.log();
    if (page + 1 > totalResults / 10) {
    
    } else {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
      let response = await fetch(url);
      let parsedData = await response.json();
      console.log(parsedData);
      setNews(parsedData.articles);
      console.log("Next");
      setPage(page + 1);
    }
  };

  return (
    <div className='container my-3'>
    <h1>News1214 -- Topheadlines</h1>
    <div className="row">
      {news.map((articles) => {
        return (
          <div className="col-md-4" key={articles.url}>
            <NewsItem
              title={articles.title ? articles.title : ""}
              description={articles.description ? articles.description : ""}
              imageUrl={articles.urlToImage}
              url={articles.url}
              author={articles.author}
              date={articles.publishedAt}
            />
          </div>
        );
      })}</div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;