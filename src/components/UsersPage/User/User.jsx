import React from "react";
import styles from "../UsersPage.module.css";

const User = (props) => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.avatarWrapper}>
        <img className={styles.avatar} src={props.avatar} alt="" />
        {props.followBtn ? (
          <button
            className={styles.followBtn}
            onClick={() => props.unfollowed(props.id)}
          >
            unfollow
          </button>
        ) : (
          <button
            className={styles.followBtn}
            onClick={() => props.followed(props.id)}
          >
            follow
          </button>
        )}
      </div>
      <div className={styles.userInfo}>
        <div>
          <span className={styles.userInfo__Name}>{props.name}</span>
          <span className={styles.userInfo__Name}>{props.surname}</span>
        </div>
        <div>
          <span className={styles.userInfo__location}>{props.country}</span>
          <span className={styles.userInfo__location}>{props.city}</span>
        </div>
      </div>
    </div>
  );
};
export default User;
