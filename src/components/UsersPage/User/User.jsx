import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../UsersPage.module.scss';
import avatar from '../../../assets/img/avatar-base.png';

const User = (props) => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.avatarWrapper}>
        <Link to={`/profile/${props.id}`}>
          <img
            className={styles.avatar}
            src={props.photoSmall || avatar}
            alt=""
          />
        </Link>
        {props.followBtn 
          ? <button
              className={styles.followBtn}
              disabled={props.fetchInProcess.some((id) => id === props.id)}
              onClick={() => props.unfollowThunkCreator(props.id)}
            > unfollow </button>
         : <button
              className={styles.followBtn}
              disabled={props.fetchInProcess.some((id) => id === props.id)}
              onClick={() => props.followThunkCreator(props.id)}
            > follow </button>
        }
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
