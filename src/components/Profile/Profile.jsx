import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlock from "./PostsBlock/PostsBlock";

const Profile = (props) => {
  const { profilePage, dispatch } = props;

  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostsBlock profilePage={profilePage} dispatch={dispatch} />
    </div>
  );
};
export default Profile;
