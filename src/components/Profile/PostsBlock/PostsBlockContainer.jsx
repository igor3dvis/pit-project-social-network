import React from "react";
import PostsBlock from "./PostsBlock";
import {
  addNewPostActionCreator,
  updateTextPostActionCreator,
} from "../../../redux/reducerProfile";

const PostsBlockContainer = (props) => {
  //const { profilePage, dispatch } = props;
  
  const onAddPost = () => props.store.dispatch(addNewPostActionCreator());

  const onPostChange = (text) => {
    props.store.dispatch(updateTextPostActionCreator(text));
  };

  return (
    <>
      <PostsBlock 
      profilePage={props.store.state.profilePage}
      updateNewPost={onPostChange}
      addNewPost={onAddPost}
      />
    </>
  );
};

export default PostsBlockContainer;