import React from "react";
import {
  addNewMessage,
  updateTextMessage,
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import Message from "./Mesage/Mesage";
import styles from "./MessagesBlock.module.css";
import { compose } from "redux";

const MessagesBlock = (props) => {
  //const {  } = props;

  let newMess = React.createRef();

  const handlerAddMessage = () => {
    props.addNewMessage();
  };

  const handlerMessageChange = () => {
    props.updateMessage(newMess.current.value);
  };

  return (
    <>
      <div>
        <div className={styles.messages}>
          {props.messagesData.map((message, index) => {
            return <Message key={index} messageText={message.messageText} />;
          })}
        </div>

        <div className={styles.newMessage}>
          <textarea
            className={styles.newMessage__Text}
            ref={newMess}
            onChange={handlerMessageChange}
            value={props.messageTextDefault}
          />
          <button
            className={styles.newMessage__Btn}
            onClick={handlerAddMessage}
          >
            create
          </button>
        </div>
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    messageTextDefault: state.messagesPage.messageTextDefault,
  };
};

export default compose(
  connect(mapStateToProps, { addNewMessage, updateTextMessage })
)(MessagesBlock);
