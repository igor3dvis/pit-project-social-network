import React from "react";
import { Link } from "react-router-dom";
import styles from "./../DialogsBlock.module.css";

const Dialog = (props) => {
  return (
    <div className={styles.dialog}>
      <Link to={`/messages/${props.id}`} className={styles.links}>
        {props.name}
      </Link>
    </div>
  );
};

export default Dialog;
