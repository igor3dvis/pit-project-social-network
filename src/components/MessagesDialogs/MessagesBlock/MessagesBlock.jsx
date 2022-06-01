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
    let text = newMess.current.value;
    props.updateMessage(text);
  };

  //debugger;

  return (
    <>
      <div>
        <div className={styles.messages}>
          {props.messagesPage.messagesData.map((message, index) => {
            return <Message key={index} messageText={message.messageText} />;
          })}
        </div>

        <div className={styles.newMessage}>
          <textarea
            className={styles.newMessage__Text}
            ref={newMess}
            onChange={handlerMessageChange}
            value={props.messagesPage.messageTextDefault}
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
