import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./DialogsBlock.module.css";

const DialogsBlock = (props) => {
  // const { } = props;
//debugger
  return (
    
    <>
      <div className={styles.dialogs}>
        {props.messagesPage.dialogsData.map((dialog) => {
          return <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />;
        })}
      </div>
    </>
  );
};

export default DialogsBlock;