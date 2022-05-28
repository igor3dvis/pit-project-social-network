import React from "react";
import styles from "./PostsBlock.module.css";
import Post from "../PostsBlock/Post/Post";
import {
  addNewPostActionCreator,
  updateTextPostActionCreator,
} from "../../../myRedux/reducerProfile";

const PostsBlock = (props) => {
  const { profilePage, dispatch } = props;

  let newPost = React.createRef();

  const addPost = () => dispatch(addNewPostActionCreator());

  const handlerChange = () => {
    let text = newPost.current.value;
    dispatch(updateTextPostActionCreator(text));
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
