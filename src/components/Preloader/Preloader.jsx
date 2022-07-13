import React from "react";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <>
      <div className={styles.preloadWrapper}>
        <div className={styles.preloadItems}>
          <span className={styles.preloadItem}>I</span>
          <span className={styles.preloadItem}>S</span>
          <span className={styles.preloadItem}>_</span>
          <span className={styles.preloadItem}>L</span>
          <span className={styles.preloadItem}>O</span>
          <span className={styles.preloadItem}>A</span>
          <span className={styles.preloadItem}>D</span>
          <span className={styles.preloadItem}>I</span>
          <span className={styles.preloadItem}>N</span>
          <span className={styles.preloadItem}>G</span>
          <span className={styles.preloadItem}>.</span>
          <span className={styles.preloadItem}>.</span>
          <span className={styles.preloadItem}>.</span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
