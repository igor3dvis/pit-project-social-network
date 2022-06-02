import React from "react";
import Message from "../MessagesBlock/Mesage/Mesage";
import styles from "./MessagesBlock.module.css";

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
export default MessagesBlock;
