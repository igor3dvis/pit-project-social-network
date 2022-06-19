import { unicId } from "../utils/idFromDateTime";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";
const SET_PROFILE_INFO = "SET-PROFILE-INFO";

let initionalizeState = {
  //postsData: [ ],
  postsData: [{ id: 1, text: "Hello, Word" }],
  postTextDefault: "text new post ...",
  userProfileInfo: null,
};

export const profileReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let id = unicId();
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: id, text: state.postTextDefault },
        ],
        postTextDefault: "",
      };

    case UPDATE_TEXT_POST:
      return {
        ...state,
        postTextDefault: action.newText,
      };

    case SET_PROFILE_INFO:
      return {
        ...state,
        userProfileInfo: action.info
      };

    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_NEW_POST });
export const updateNewPost = (text) => ({
  type: UPDATE_TEXT_POST,
  newText: text,
});
export const setProfileInfo = (userInfo) => ({
  type: SET_PROFILE_INFO,
  info: userInfo,
});
