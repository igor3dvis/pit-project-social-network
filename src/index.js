import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./myRedux/state.js";
import { unicId } from "./utils/idFromDateTime";

const reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addNewPost={store.addNewPost.bind(store)}
        updateTextPost={store.updateTextPost.bind(store)}
        addNewMessage={store.addNewMessage.bind(store)}
        updateTextMessage={store.updateTextMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reRender(store.getState());

store.subscride(reRender);

console.log(unicId());