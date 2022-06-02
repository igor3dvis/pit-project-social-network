import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostsBlockContainer />
    </div>
  );
};
export default Profile;
