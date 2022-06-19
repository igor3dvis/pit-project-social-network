import PostsBlock from "./PostsBlock";
import {
  addNewPost,
  updateNewPost,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const PostsBlockContainer = connect(
  mapStateToProps,{updateNewPost, addNewPost}
)(PostsBlock);

export default PostsBlockContainer;