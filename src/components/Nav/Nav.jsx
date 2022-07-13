import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import styles from "./Nav.module.scss";

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to={`/profile/${props.myId}`}>MyProfile</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink to="/messages">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news">News</NavLink>
      </div>
      <div>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

let mapStateToProps = (state) => ({ myId: state.auth.userID });

export default compose(connect(mapStateToProps))(Nav);
