import React from "react";
import styles from "./PostsBlock.module.css";
import Post from "../PostsBlock/Post/Post";

const PostsBlock = (props) => {
  const { profilePage, addNewPost, updateTextPost } = props;

  let newPost = React.createRef();

  const addPost = () => {
    let text = newPost.current.value;
    addNewPost(text);
  };

  const handlerChange = () => {
    let text = newPost.current.value;
    updateTextPost(text); // called from "state.js"
  };

  return (
    <>
      <div className={styles.my__posts}>
        MY POSTS
        <div className={styles.new__post}>
          <textarea
            className={styles.newPostText}
            ref={newPost}
            onChange={handlerChange}
            value={profilePage.postTextDefault}
          ></textarea>
          <button className={styles.newPostBtn} onClick={addPost}>
            create
          </button>
        </div>
        <div className={styles.posts}>
          {profilePage.postsData.map((post) => {
            return <Post key={post.id} text={post.text} />;
          })}
        </div>
      </div>
    </>
  );
};
export default PostsBlock;