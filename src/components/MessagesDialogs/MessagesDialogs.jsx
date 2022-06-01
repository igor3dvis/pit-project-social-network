import React from "react";
import DialogsBlockContainer from "./DialogsBlock/DialogsBlockContainer";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";
import styles from "./MessagesDialogs.module.css";

const MessagesDialogs = (props) => {
  //const {} = props;

  return (
    
      <div className={styles.dialogsWrapper}>
        <DialogsBlockContainer store={props.store}/>
        <MessagesBlockContainer store={props.store}/>
      </div>
    
  );
};
export default MessagesDialogs;