import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store.js";


const reRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}  />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reRender(store.getState());

//store.subscride(reRender);
store.subscribe(()=>{
  let state = store.getState()
  reRender(store.getState(state))
});