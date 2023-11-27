import React from 'react'
import styles from "./HomePage.module.css"
import ProfileInfo from '../components/Profile/ProfileInfo'
import Datetime from '../components/DateTime/Datetime'
import Weather from '../components/WeatherApi/Weather'

const HomePage = () => {
  return (
    <>
        <div className={styles.home}>
          <div className={styles.profile}>
            <ProfileInfo/>
          </div>
          <div className={styles.dateTime}>
            <Datetime/>
            <Weather/>
          </div>
           
           
            
        </div>
        
    </>
  )
}

export default HomePage