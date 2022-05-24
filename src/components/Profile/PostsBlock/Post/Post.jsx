import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  const { text } = props;
  return <div className={styles.post}>{text}</div>;
};
export default Post;
