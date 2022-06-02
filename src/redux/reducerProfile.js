import { unicId } from "../utils/idFromDateTime";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";

let initionalizeState = {
  //postsData: [ ],
  postsData: [
    { id: 1, text: "Hello, Word" },
  ],
  postTextDefault: "text new post ...",
};

export const profileReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let id = unicId();
      return {
        ...state,
        postsData: [...state.postsData, { id: id, text: state.postTextDefault }],
        postTextDefault: "",
      };

    case UPDATE_TEXT_POST:
      return { 
        ...state, 
        postTextDefault: action.newText 
      };

    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateTextPostActionCreator = (text) => ({
  type: UPDATE_TEXT_POST,
  newText: text,
});
