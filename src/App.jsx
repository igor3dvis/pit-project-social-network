import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
//import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import DialogsPage from "./components/DialogsPage/DialogsPage";

import store from "./redux/store.js";


const App = () => {
  //const { store } = props;

  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <main className="content">
          <Route path="/profile/:userID">
            <Profile />
          </Route>
          <Route path="/users">
            <UsersPageContainer />
          </Route>
          <Route path="/messages">
            <DialogsPage />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </main>
      </div>
    </Provider>
  );
};
export default App;
