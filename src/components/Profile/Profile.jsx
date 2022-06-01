import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import PostsBlock from "./PostsBlock/PostsBlock";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";

const Profile = (props) => {
  //const { profilePage, dispatch } = props;
 
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostsBlockContainer store={props.store} />
    </div>
  );
};
export default Profile;
