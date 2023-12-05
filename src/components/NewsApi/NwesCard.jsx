// import React, { useEffect, useState } from 'react';
// import styles from './NewsCard.module.css';
// import axios from 'axios';
// import Datetime from '../DateTime/Datetime';

// const truncateText = (text, maxLength) => {
//   if (text.length > maxLength) {
//     return text.slice(0, maxLength) + '.......';
//   }
//   return text;
// };

// const NewsCard = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = 'JjTJTy11T2l3tJOxIR7PuuC6GLk9C0VF';
//         const apiUrl = `https://api.apilayer.com/world_news/extract-news?url=url&analyze=analyze=${apiKey}`;
//         const response = await axios.get(apiUrl);
//         setNewsData(response.data.articles);
//       } catch (error) {     

//         console.error('Error fetching news data:', error.message);

//         // Rethrow the error to trigger the catch block outside useEffect
//       throw error;

//         // setError('Error fetching news data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews().catch((error) => {
//       setError('Error fetching news data. Please try again later.');
//     });
//   }, []);

  

//   if (loading) {
//     return <p className={styles.loadingMessage}>Loading news...</p>;
//   }

//   if (error) {
//     return <p className={styles.errorMessage}>{error}</p>;
//   }

//   if (!newsData || newsData.length === 0) {
//     return <p className={styles.errorMessage}>No news data available.</p>;
//   }

//   // Display the first news article
//   const firstArticle = newsData[0];

//   return (
//     <div className={styles.newsCard}>
//       <div>
//         <img src={firstArticle.urlToImage} alt="News" className={styles.newsImage} />
//       </div>
//       <div className={styles.heading}>
//         <h2>{firstArticle.title}</h2>
//         <div className={styles.date}>
//           <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
//         </div>
//       </div>
//       <div className={styles.about}>
//         {firstArticle.description && (
//           <p className={styles.description}>{truncateText(firstArticle.description, 130)}</p>
//         )}
//         {firstArticle.content && (
//           <p className={styles.content}>{truncateText(firstArticle.content, 70)}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsCard;





// import React, { useEffect, useState } from 'react';
// import styles from './NewsCard.module.css';
// import Datetime from '../DateTime/Datetime';
// import axios from 'axios';

// const truncateText = (text, maxLength) => {
//   if (text.length > maxLength) {
//     return text.slice(0, maxLength) + '.......';
//   }
//   return text;
// };

// const NewsCard = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRandomNews = async () => {
//       try {
//         // const apiKey = 'a0c975056bd9469eacf68a9429113a96'; // Replace with your News API key

//         const apiKey = 'a1362e4a78110946d636806f4ced56eb';


        


//         // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;


//         const apiUrl = `https://gnews.io/api/v4/{endpoint}?apikey=${apiKey}`;



//         const response = await axios.get(apiUrl);
//         if (response.data && response.data.articles && response.data.articles.length > 0) {
//           setNewsData(response.data.articles);
//         } else {
//           throw new Error('Invalid response format');
//         }
//       } catch (error) {
//         console.error('Error fetching news data:', error.message);
//         setError('Error fetching news data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRandomNews();
//   }, []);

//   if (loading) {
//     return <p className={styles.loadingMessage}>Loading news...</p>;
//   }

//   if (error) {
//     return <p className={styles.errorMessage}>{error}</p>;
//   }

//   if (!newsData || newsData.length === 0) {
//     return <p className={styles.errorMessage}>No news data available.</p>;
//   }

//   // Display a random news article
//   const randomIndex = Math.floor(Math.random() * newsData.length);
//   const randomArticle = newsData[randomIndex];

//   return (
//     <div className={styles.newsCard}>
//       <div>
//         {randomArticle && randomArticle.urlToImage && (
//           <img src={randomArticle.urlToImage} alt="News" className={styles.newsImage} />
//         )}
//       </div>
//       <div className={styles.heading}>
//         <h2>{randomArticle && randomArticle.title}</h2>
//         <div className={styles.date}>
//           <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
//         </div>
//       </div>
//       <div className={styles.about}>
//         {randomArticle && randomArticle.description && (
//           <p className={styles.description}>{truncateText(randomArticle.description, 130)}</p>
//         )}
//         {randomArticle && randomArticle.content && (
//           <p className={styles.content}>{truncateText(randomArticle.content, 70)}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React, { useEffect, useState } from 'react';
import styles from './NewsCard.module.css';
import Datetime from '../DateTime/Datetime';
import axios from 'axios';

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
    const fetchRandomNews = async () => {
      try {
        const apiKey = 'a1362e4a78110946d636806f4ced56eb';
        const apiUrl = `https://gnews.io/api/v4/top-headlines?country=us&token=${apiKey}`;
        const response = await axios.get(apiUrl);

        if (response.data && response.data.articles && response.data.articles.length > 0) {
          setNewsData(response.data.articles);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching news data:', error.message);
        setError('Error fetching news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRandomNews();
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
  const randomArticle = newsData[0];

  return (
    <div className={styles.newsCard}>
      <div>
        {randomArticle && randomArticle.image && (
          <img src={randomArticle.image} alt="News" className={styles.newsImage} />
        )}
      </div>
      <div className={styles.heading}>
        <h2>{randomArticle && randomArticle.title}</h2>
        <div className={styles.date}>
          <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
        </div>
      </div>
      <div className={styles.about}>
        {randomArticle && randomArticle.description && (
          <p className={styles.description}>{truncateText(randomArticle.description, 130)}</p>
        )}
        {randomArticle && randomArticle.content && (
          <p className={styles.content}>{truncateText(randomArticle.content, 70)}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
