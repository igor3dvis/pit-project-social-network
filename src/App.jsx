import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersPage from "./components/UsersPage/UsersPage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { connect } from "react-redux";
import { getLoginInfoTC } from './redux/authReducer';
import styles from "./App.module.scss";

const App = (props) => {
   useEffect(() => {
     props.getLoginInfoTC();
   }, []);

   useEffect(() => {
    props.getLoginInfoTC();
  }, [props.isAuth]);

  return (
    <>
      <div className={(props.isAuth) ? styles.appWrapperWithLogin : styles.appWrapperNoLogin}>
        <Header />
        {(props.isAuth) 
        ? <>
            <Nav />
            <main className="content">
              <Route path="/profile/:userID"><ProfilePage /></Route>
              <Route path="/users"><UsersPage /></Route>
              <Route path="/messages"><DialogsPage /></Route>
              <Route path="/news"><News /></Route>
              <Route path="/music"><Music /></Route>
              <Route path="/settings"><Settings /></Route>
              <Route path="/login"><LoginPage /></Route>
            </main>
          </> 
        : <LoginPage />
      }
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {getLoginInfoTC})(App);
