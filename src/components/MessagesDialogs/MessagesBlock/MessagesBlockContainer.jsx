import React from "react";
import MessagesBlock from "./MessagesBlock";
import {
  addNewMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../../redux/reducerMessages";

const MessagesBlockContainer = (props) => {
  //const {} = props;

  const onAddMess = () => props.store.dispatch(addNewMessageActionCreator());

  const onMessageChange = (text) => {
    props.store.dispatch(updateTextMessageActionCreator(text));
  };

  return (
    <>
      <MessagesBlock
        messagesPage={props.store.state.messagesPage}
        addNewMessage={onAddMess}
        updateMessage={onMessageChange}
      />
    </>
  );
};
export default MessagesBlockContainer;
