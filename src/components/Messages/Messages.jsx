import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import styles from "./Messages.module.css";

const Messages = (props) => {
  const { messagesPage, addNewMessage, updateTextMessage } = props;

  return (
    <div className={styles.messagesBlockWrapper}>
      <Dialogs
        messagesPage={messagesPage}
        addNewMessage={addNewMessage}
        updateTextMessage={updateTextMessage}
      />
    </div>
  );
};
export default Messages;
