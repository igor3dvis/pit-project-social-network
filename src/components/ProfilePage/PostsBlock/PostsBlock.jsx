import React from "react";
import styles from "./PostsBlock.module.scss";
import Post from "./Post/Post";

const PostsBlock = (props) => {
  
  let newPost = React.createRef();

  const handlerAddPost = () => props.addNewPost();

  const handlerPostChange = () => {
    props.updateNewPost(newPost.current.value);
  };

  return (
    <>
      <div className={styles.my__posts}>
        <div className={styles.new__post}>
          <textarea
            className={styles.newPostText}
            ref={newPost}
            onChange={handlerPostChange}
            value={props.profilePage.postTextDefault}
          ></textarea>
          <button className={styles.newPostBtn} onClick={handlerAddPost}>
            create
          </button>
        </div>
        {/* PostsBlock - all posts are in this block */}
        <div className={styles.posts}>
          {props.profilePage.postsData.map((post) => {
            return <Post key={post.id} text={post.text} />;
          })}
        </div>
      </div>
    </>
  );
};
export default PostsBlock;
