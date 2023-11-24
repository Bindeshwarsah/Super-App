import React from 'react'
import styles from "./MovieBox.module.css";
import Action from "../../assets/images/Action-image.png";
import Drama from "../../assets/images/Drama-image.png";
import Fantasy from "../../assets/images/Fantasy-image.png";
import Fiction from "../../assets/images/Fiction-image.png";
import Horror from "../../assets/images/Horror-image.png";
import Music from "../../assets/images/Music-image.png";
import Romance from "../../assets/images/Romance-image.png";
import Thriller from "../../assets/images/Thriller-image.png";
import Western from "../../assets/images/Western-image.png";


const MovieBox = () => {
  return (
    <div className={styles.card}>
        
      <div className={styles.leftContainer}>
      
      </div>
      <div className={styles.rightContainer}>
        <div className={`${styles.box} ${styles.action}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Action</h3>
          </div>
          <img src={Action} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.drama}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Drama</h3>
          </div>
          <img src={Drama} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.romance}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Romance</h3>
          </div>
          <img src={Romance} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.thriller}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Thriller</h3>
          </div>
          <img src={Thriller} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.western}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Western</h3>
          </div>
          <img src={Western} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.horror}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Horror</h3>
          </div>
          <img src={Horror} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.fantasy}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Fantasy</h3>
          </div>
          <img src={Fantasy} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.music}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Music</h3>
          </div>
          <img src={Music} alt="image" className={styles.image}/>
        </div>
  
        <div className={`${styles.box} ${styles.fiction}`}>
          <div className={styles.headingBox}>
            <h3 className={styles.heading}>Fiction</h3>
          </div>
          <img src={Fiction} alt="image" className={styles.image}/>
        </div>
        
        <button className={styles.btn}>Next Page</button>
    
      </div>
    </div>

  )
}

export default MovieBox
