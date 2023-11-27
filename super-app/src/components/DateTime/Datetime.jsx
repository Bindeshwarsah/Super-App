import React, { useEffect, useState } from 'react';
import styles from "./Datetime.module.css";

const Datetime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const formatTimeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true,
  };

  const formattedDate = currentDateTime.toLocaleDateString('en-US', formatDateOptions);
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', formatTimeOptions);

  return (
    <div className={styles.datetimeContainer}>
        <div className={styles.date}>{formattedDate.replace(/\//g, '-')}</div>
      <div className={styles.time}>{formattedTime}</div>
    </div>
  );
};

export default Datetime;
