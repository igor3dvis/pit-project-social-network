import React from "react";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.img}></div>
      <div className={styles.profile__top}>
        <img
          className={styles.profile__avatar}
          src="https://store.playstation.com/store/api/chihiro/00_09_000/container/PT/pt/19/EP4396-CUSA10659_00-AV00000000000112/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
          alt="fon"
        />
        <div className={styles.profile__description}>
          <p>John Smitt</p>
          <p>Massachusets</p>
          <p>Programmer</p>
          <p>10/01/2001</p>
        </div>
      </div>
      
    </div>
  );
};
export default ProfileInfo;