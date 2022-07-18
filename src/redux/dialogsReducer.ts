import { TDialog, TMessage } from "../typesModels/types"

const ADD_NEW_MESSAGE = 'dialogs/ADD-NEW-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'dialogs/UPDATE-TEXT-MESSAGE'

let initialState = {
  dialogsData: [
    { id: 1, name: "Oxana" },
    { id: 2, name: "Ivan" },
  ] as Array<TDialog>,
  messagesData: [
    { messageText: "How are You?" },
    { messageText: "Hello, I am fine. Are You?" },
  ] as Array<TMessage>,
  messageTextDefault: "enter some text ...",
};

export type InitialStateType = typeof initialState

export const messagesReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return { ...state,
        messagesData: [...state.messagesData, { messageText: state.messageTextDefault }],
        messageTextDefault: "",
      };

    case UPDATE_TEXT_MESSAGE:
      return { ...state, messageTextDefault: action.newText }
      
    default:
      return state;
  }
};

//actions types
type TAddNewMessageAC = { type: typeof ADD_NEW_MESSAGE }
type TUpdateTextMessageAC = { type: typeof UPDATE_TEXT_MESSAGE, newText: string }

//action_creator
export const addNewMessageAC = ():TAddNewMessageAC => ({ type: ADD_NEW_MESSAGE })
export const updateTextMessageAC = (text: string): TUpdateTextMessageAC => ({ type: UPDATE_TEXT_MESSAGE, newText: text })