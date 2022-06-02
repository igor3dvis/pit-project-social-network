const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

let initionalizeState = {
  dialogsData: [
    { id: "1", name: "Oxana" },
    { id: "2", name: "Ivan" },
  ],
  messagesData: [
    { messageText: "How are You?" },
    { messageText: "Hello, I am fine. Are You?" },
  ],
  messageTextDefault: "enter some text ...",
};

export const messagesReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { messageText: state.messageTextDefault }],
        messageTextDefault: "",
      };

    case UPDATE_TEXT_MESSAGE:
      return{
        ...state,
        messageTextDefault: action.newText
      }
      
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateTextMessageActionCreator = (text) => ({
  type: UPDATE_TEXT_MESSAGE,
  newText: text,
});