import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { addNewPost, updateTextPost, addNewMessage, updateTextMessage, subscride } from "./myRedux/state.js";
import { unicId } from "./utils/idFromDateTime";

const reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addNewPost={addNewPost}
        updateTextPost={updateTextPost}
        addNewMessage={addNewMessage}
        updateTextMessage={updateTextMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reRender(state);

subscride(reRender);

console.log(unicId());