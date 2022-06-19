import MessagesBlock from "./MessagesBlock";
import {
  addNewMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    messageTextDefault: state.messagesPage.messageTextDefault,
  };
};

let mapDistatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    updateMessage: (text) => {
      dispatch(updateTextMessageActionCreator(text));
    },
  };
};

const MessagesBlockContainer = connect(
  mapStateToProps,
  mapDistatchToProps
)(MessagesBlock);

export default MessagesBlockContainer;