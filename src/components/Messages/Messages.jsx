import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import styles from "./Messages.module.css";

const Messages = (props) => {
  const { messagesPage, dispatch } = props;

  return (
    <div className={styles.messagesBlockWrapper}>
      <Dialogs messagesPage={messagesPage} dispatch={dispatch} />
    </div>
  );
};
export default Messages;
