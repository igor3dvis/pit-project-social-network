import React from "react";
import { Link } from "react-router-dom";
import User from "./User/User";
import styles from "./UsersPage.module.css";

const UsersPage = (props) => {
  
  return (
    <div className={styles.usersWrapper}>
      {props.users.map((user) => {
        return (
          <Link to={"/profile/" + user.id} key={user.id}>
            <User
              id={user.id}
              name={user.name}
              // surname={user.surName}
              // avatar={user.avatar}
              // country={user.location.country}
              // city={user.location.city}
              followBtn={user.followed}
              followed={props.followed}
              unfollowed={props.unfollowed}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default UsersPage;
