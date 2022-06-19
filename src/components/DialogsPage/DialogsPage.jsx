import React from "react";
import styles from "./DialogsPage.module.css";
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";

const DialogsPage = () => {
  return (
    <div className={styles.dialogsWrapper}>
      <DialogsBlockContainer />
      <MessagesBlockContainer />
    </div>
  );
};
export default DialogsPage;
