// import React, { useEffect, useState } from 'react'
// import styles from "./NewsCard.module.css";
// import axios from 'axios';

// const NwesCard = () => {
//     const [newsData, setNewsData]=useState(null);
//     const [loading, setLoading]=useState(null);

//     useEffect(()=>{
//         const fetchNews=async()=>{

//         try{
//             const apiKey='a0c975056bd9469eacf68a9429113a96';
//             const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
//             const response=await axios.get(apiUrl)
//             setNewsData(response.data)

//         }catch(error){
//             console.error('Error fetching news data:', error);
//         }finally{
//             setLoading(false);
//         }
//     };
//     fetchNews();

//     },[]);

//     if (loading) {
//         return <p>Loading news...</p>;
//       }
//       if (!newsData || newsData.status !== 'ok') {
//         return <p>Error fetching news data</p>;
//       }
    

//   return (
//     <div>
//         {newsData.articles.map((article,index)=>(
//             <div key={index}>
//             <div><img src={article.urlToImage} alt="image" /></div>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <p>Author: {article.author}</p>
//             <p>Published: {new Date(article.publishedAt).toLocaleString()}</p>
//             <p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read More
//             </a>
//           </p>

//             </div>
//         ))}
//     </div>
//   )
// }

// export default NwesCard

// import React, { useEffect, useState } from 'react';
// import styles from './NewsCard.module.css';
// import axios from 'axios';
// import Datetime from '../DateTime/Datetime';

// const NewsCard = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = 'a0c975056bd9469eacf68a9429113a96';
//         const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-27&sortBy=publishedAt&apiKey=a0c975056bd9469eacf68a9429113a96`;
//         const response = await axios.get(apiUrl);
//         setNewsData(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return <p>Loading news...</p>;
//   }

//   if (!newsData || newsData.length === 0) {
//     return <p>Error fetching news data</p>;
//   }

//   // Display the first news article
//   const firstArticle = newsData[70];

//   return (
//     <div className={styles.newsCard}>
//       <div>
//         <img src={firstArticle.urlToImage} alt="News" className={styles.newsImage} />

//       </div>
//       <div className={styles.heading}>
//         <h2>{firstArticle.title}</h2>
//         <div className={styles.date} >
//         <Datetime backgroundColor="transparent" fontSize="16px" textColor="#FFF" width="15rem" />
//         </div>
        
//       </div>
//       <div className={styles.about}>
//         {firstArticle.description && (
//           <p className={styles.description}>{firstArticle.description}</p>
//         )}
//         {firstArticle.content && (
//           <p className={styles.content}>{firstArticle.content}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


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

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = 'a0c975056bd9469eacf68a9429113a96';
//         const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-27&sortBy=publishedAt&apiKey=${apiKey}`;
//         const response = await axios.get(apiUrl);
//         setNewsData(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return <p className={styles.errorMessage}>Loading news...</p>;
//   }

//   if (!newsData || newsData.length === 0) {
//     return <p className={styles.errorMessage}>Error fetching news data</p>;
    
//   }

//   // Display the first news article
//   const firstArticle = newsData[12];

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
