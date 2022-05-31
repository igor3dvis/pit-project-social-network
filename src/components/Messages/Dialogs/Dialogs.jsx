import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Mesage/Mesage";
import styles from "./Dialogs.module.css";
import {
  addNewMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../../redux/reducerMessages";

const Dialogs = (props) => {
  const { messagesPage, dispatch } = props;

  let newMess = React.createRef();

  const addMess = () => dispatch(addNewMessageActionCreator());

  const handlerChange = () => {
    let text = newMess.current.value;
    dispatch(updateTextMessageActionCreator(text));
  };

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogs}>
        {messagesPage.dialogsData.map((dialog) => {
          return <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />;
        })}
      </div>
      <div>
        <div className={styles.messages}>
          {messagesPage.messagesData.map((message, index) => {
            return <Message key={index} messageText={message.messageText} />;
          })}
        </div>

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
