import React from 'react'
import styles from "./HomePage.module.css"
import ProfileInfo from '../components/Profile/ProfileInfo'
import Datetime from '../components/DateTime/Datetime'
import Weather from '../components/WeatherApi/Weather'
import NewsCard from '../components/NewsApi/NwesCard'
import Notes from '../components/notes/Notes'

const HomePage = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.leftCard}>
          <div className={styles.profile}>
            <ProfileInfo/>
          </div>
          <div className={styles.dateTime}>
            <Datetime/>
            <Weather/>
          </div>
        </div>

        <div className={styles.notesCard}>
          <Notes/>
        </div>
        <div className={styles.rightCard}>
          <NewsCard/>
        </div>   
            
      </div>
        
    </>
  )
}

export default HomePage