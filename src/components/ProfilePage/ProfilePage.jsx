import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import { withRedirectHoc } from "../../hoc/withRedirectHoc";
import { compose } from "redux";

const ProfilePage = () => {
    return (
    <div className={styles.profile}>
      <ProfileInfoContainer />
      <PostsBlockContainer />
    </div>
  );
};


export default compose(
  withRedirectHoc
)(ProfilePage)
