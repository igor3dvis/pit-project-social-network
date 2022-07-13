import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { logoutTC } from "../../redux/authReducer";
import styles from "./Header.module.scss";

const Header = (props) => {
  const [isShowLoginMenu, setIsShowLoginMenu] = useState(false)

  const showLoginMenu = () =>{setIsShowLoginMenu(true)}

  const hideLoginMenu = () =>{setIsShowLoginMenu(false)}

  const logoutHandler = () => {
    console.log('LOGOUT_HANDLER');
    props.logoutTC()}
    
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="https://store.playstation.com/store/api/chihiro/00_09_000/container/BE/nl/99/EP2402-CUSA05624_00-AV00000000000233/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
        alt="logo"
      />
      <h2 className={styles.headerTitle}> {`< h a c k e r s _ c h a t >`} </h2>
      <div className={styles.contactWrapper}>
        <p className={styles.contact}>+38063-123-45-67</p>
        <p className={styles.contact}>hacker@gmail.net</p>
        <div className={styles.loginWrapper}>
        {props.isAuth 
          ? <>
              <span className={styles.login} onClick={showLoginMenu}>{props.login}</span>
              <div  className={ isShowLoginMenu ? styles.loginMenu : styles.hide } onMouseLeave={hideLoginMenu} >
                <div className={styles.loginMenu__item}>
                  <Link to={`/profile/${props.userID}`}>my_profile</Link>
                </div>
                <div className={styles.loginMenu__item}>
                  <span onClick={logoutHandler}>log_out</span>
                </div>
              </div>
            </>
          : <Link to={'/login'}>l o g i n</Link>}
      </div>
      </div>
    </header>
  );
};
export default Header;
