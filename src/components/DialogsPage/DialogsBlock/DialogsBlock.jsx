import React from "react";
import Dialog from "./Dialog/Dialog";
import { connect } from "react-redux";
import styles from "./DialogsBlock.module.css";
import { compose } from "redux";

const DialogsBlock = (props) => {
  
  return (
    <>
      <div className={styles.dialogs}>
        {props.dialogsData.map((dialog) => {
          return <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />;
        })}
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
  };
};

export default compose(connect(mapStateToProps))(DialogsBlock);
