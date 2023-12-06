import React from 'react'
import {LocalStorageUtils} from "../Profile/LocalStorageUtils";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
    const info = LocalStorageUtils('registrationData');
    console.log("User Info:", info);
  return (
    <div className={styles.container}>
        {info &&(
            <ul className={styles.infoBox}>
                {/* <div className={styles.container}> */}
                    <li className={styles.name}>
                    {info.name}
                    </li>
                    <li className={styles.email}>
                    {info.email}
                    </li>
                    <li className={styles.username}>
                        {info.username}
                    </li>
                {/* </div> */}
               
            </ul>
            
            
        )
        }
    </div>
  )
}

export default UserInfo