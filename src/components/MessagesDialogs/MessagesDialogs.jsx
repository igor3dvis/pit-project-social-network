import React from "react";
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";
import styles from "./MessagesDialogs.module.css";

const MessagesDialogs = () => {
  return (
    <div className={styles.dialogsWrapper}>
      <DialogsBlockContainer />
      <MessagesBlockContainer />
    </div>
  );
};
export default MessagesDialogs;
