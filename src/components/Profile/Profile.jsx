import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlock from "./PostsBlock/PostsBlock";

const Profile = (props) => {
  const { profilePage, addNewPost, updateTextPost } = props;

  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostsBlock
        profilePage={profilePage}
        addNewPost={addNewPost} 
        updateTextPost={updateTextPost}
      />
    </div>
  );
};
export default Profile;
