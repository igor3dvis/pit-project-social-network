import React from "react";
import User from "./User/User";
import styles from "./UsersPage.module.scss";

const Users = (props) => {
  return (
    <div className={styles.usersWrapper}>
      {props.users.map((user) => {
        return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              photoSmall={user.photos.small}
              photoLarge={user.photos.large}
              status={user.status}
              uniqueUrlName={user.uniqueUrlName}
              followBtn={user.followed}
              fetchInProcess={props.fetchInProcess}
              toggleFetchInProcess={props.toggleFetchInProcess}
              unfollowTC={props.unfollowTC}
              followTC={props.followTC}
            />
        );
      })}
    </div>
  );
};
export default Users;

