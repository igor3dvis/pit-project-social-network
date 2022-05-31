import { unicId } from "../utils/idFromDateTime";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";

let initionalizeState = {
  
    postsData: [
      { id: 1, text: "Hello, Word" },
      { id: 2, text: "Post #2 alredy here!!!" },
    ],
    postTextDefault: "text new post ...",
  
};
export const profileReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let id = unicId();
      let newPost = { id: id, text: state.postTextDefault };
      state.postsData.push(newPost);
      state.postTextDefault = "";
      return state;

    case UPDATE_TEXT_POST:
      state.postTextDefault = action.newText;
      return state;

    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateTextPostActionCreator = (text) => ({
  type: UPDATE_TEXT_POST,
  newText: text,
});
