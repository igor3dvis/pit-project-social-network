import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/music">Music</Link>
      </div>
      <div>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};
export default Nav;
