import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import MessagesDialogs from "./components/MessagesDialogs/MessagesDialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  //const { store } = props;
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <main className="content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile store={props} />
              }
            />
            <Route
              path="/messages"
              element={
                <MessagesDialogs store={props} />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
export default App;
