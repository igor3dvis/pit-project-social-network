import React from "react";
import styles from "./DialogsPage.module.scss";
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import MessagesBlock from "./MessagesBlock/MessagesBlock";
import { compose } from "redux";
import { withRedirectHoc } from "../../hoc/withRedirectHoc";

const DialogsPage = () => {
  return (
    <div className={styles.dialogsWrapper}>
      <DialogsBlock />
      <MessagesBlock />
    </div>
  );
};

export default compose(withRedirectHoc)(DialogsPage)