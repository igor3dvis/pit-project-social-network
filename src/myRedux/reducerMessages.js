// const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
// const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

// export const messagesReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_NEW_MESSAGE:
//       let newMessage = { messageText: state.messageTextDefault };
//       state.messagesData.push(newMessage);
//       state.messageTextDefault = "";
//       return state;

//     case UPDATE_TEXT_MESSAGE:
//       state.messageTextDefault = action.newText;
//       return state;

//     default:
//       return state;
//   }
// };

// export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
// export const updateTextMessageActionCreator = (text) => ({
//   type: UPDATE_TEXT_MESSAGE,
//   newText: text,
// });

