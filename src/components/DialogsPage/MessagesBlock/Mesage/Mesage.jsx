import React from "react";
import styles from "./../MessagesBlock.module.scss";

const Message = (props) => {
  return <div className={styles.message}>{props.messageText}</div>;
};

export default Message;