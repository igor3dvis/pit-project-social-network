import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Mesage/Mesage";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { messagesPage, addNewMessage, updateTextMessage } = props;

  let newMess = React.createRef();

  const addMess = () => {
    let text = newMess.current.value;
    addNewMessage(); // called from "state.js"
    
  };

  const handlerChange = () => {
    let text = newMess.current.value;
    updateTextMessage(text); // called from "state.js"
  };

  let dialogsItems = messagesPage.dialogsData.map((dialog) => {
    return <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />;
  });

  let messagesItems = messagesPage.messagesData.map((message, index) => {
    return <Message key={index} messageText={message.messageText} />;
  });

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogs}>{dialogsItems}</div>
      <div>
        <div className={styles.messages}>{messagesItems}</div>

        <div className={styles.newMessage}>
          <textarea
            className={styles.newMessage__Text}
            ref={newMess}
            onChange={handlerChange}
            value={messagesPage.messageTextDefault}
          />
          <button className={styles.newMessage__Btn} onClick={addMess}>
            create
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;