import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfoContainer />
      <PostsBlockContainer />
    </div>
  );
};
export default Profile;
