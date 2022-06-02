import PostsBlock from "./PostsBlock";
import {
  addNewPostActionCreator,
  updateTextPostActionCreator,
} from "../../../redux/reducerProfile";
import { connect } from "react-redux";

// const PostsBlockContainer = (props) => {
//   //const { profilePage, dispatch } = props;

//   const onAddPost = () => props.store.dispatch(addNewPostActionCreator());

//   const onPostChange = (text) => {
//     props.store.dispatch(updateTextPostActionCreator(text));
//   };

//   return (
//     <>
//       <PostsBlock
//         profilePage={props.store.state.profilePage}
//         updateNewPost={onPostChange}
//         addNewPost={onAddPost}
//       />
//     </>
//   );
// };

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPost: (text) => {
      dispatch(updateTextPostActionCreator(text));
    },
    addNewPost: () => {
      dispatch(addNewPostActionCreator());
    },
  };
};

const PostsBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsBlock);

export default PostsBlockContainer;