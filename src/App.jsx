import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  const {
    state,
    addNewPost,
    updateTextPost,
    addNewMessage,
    updateTextMessage,
  } = props;

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
                <Profile
                  profilePage={state.profilePage}
                  addNewPost={addNewPost}
                  updateTextPost={updateTextPost}
                />
              }
            />
            <Route
              path="/messages"
              element={
                <Messages
                  messagesPage={state.messagesPage}
                  addNewMessage={addNewMessage}
                  updateTextMessage={updateTextMessage}
                />
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