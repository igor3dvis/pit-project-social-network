import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="https://store.playstation.com/store/api/chihiro/00_09_000/container/BE/nl/99/EP2402-CUSA05624_00-AV00000000000233/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
        alt="logo"
      />
      <h1 className={styles.headerTitle}> {`< h a c k e r s _ c h a t >`} </h1>
      <div className={styles.contactWrapper}>
        <p className={styles.contact}>+38063-123-45-67</p>
        <p className={styles.contact}>hacker@gmail.net</p>
      </div>
    </header>
  );
};
export default Header;
