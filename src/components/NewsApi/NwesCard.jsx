import React, { useEffect, useState } from 'react';
import styles from './NewsCard.module.css';
import axios from 'axios';
import Datetime from '../DateTime/Datetime';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '.......';
  }
  return text;
};

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'a0c975056bd9469eacf68a9429113a96';
        const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-27&sortBy=publishedAt&apiKey=${apiKey}`;
        const response = await axios.get(apiUrl);
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setError('Error fetching news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className={styles.loadingMessage}>Loading news...</p>;
  }

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>;
  }

  if (!newsData || newsData.length === 0) {
    return <p className={styles.errorMessage}>No news data available.</p>;
  }

  // Display the first news article
  const firstArticle = newsData[0];

  return (
    <div className={styles.newsCard}>
      <div>
        <img src={firstArticle.urlToImage} alt="News" className={styles.newsImage} />
      </div>
      <div className={styles.heading}>
        <h2>{firstArticle.title}</h2>
        <div className={styles.date}>
          <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
        </div>
      </div>
      <div className={styles.about}>
        {firstArticle.description && (
          <p className={styles.description}>{truncateText(firstArticle.description, 130)}</p>
        )}
        {firstArticle.content && (
          <p className={styles.content}>{truncateText(firstArticle.content, 70)}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
