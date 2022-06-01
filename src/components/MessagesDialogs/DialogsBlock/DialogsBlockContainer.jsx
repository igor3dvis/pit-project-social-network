import React from "react";
import DialogsBlock from "./DialogsBlock";


const DialogsBlockContainer = (props) => {
  //const { } = props;
  
  return (
    <>
      <DialogsBlock messagesPage={props.store.state.messagesPage}/>
    </>
  );
};
export default DialogsBlockContainer;
