import React, { useEffect, lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getLoginInfoTC } from "./redux/authReducer";
import { getIsAuth, getUserID } from "./redux/authSelectors";
//Styles
import styles from "./App.module.scss";
//Components
import Header from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/LoginPage/LoginPage";
//Lazy render component
const DialogsPage = lazy(() => import("./components/DialogsPage/DialogsPage"));
const UsersPage = lazy(() => import("./components/UsersPage/UsersPage"));



const App = (props) => {
  useEffect(() => { props.getLoginInfoTC() }, []);

  useEffect(() => { props.getLoginInfoTC() }, [props.isAuth]);

  return (
    <>
      <div className={props.isAuth ? styles.appWrapperWithLogin : styles.appWrapperNoLogin}>
        <Header />
        {props.isAuth ? (
          <>
            <Nav />
            <main className="content">
              <Switch>
              <Route exact path="/"><Redirect to={`/profile/${props.userID}`} /></Route>
                <Route path="/profile/:userID"><ProfilePage /></Route>
                <Route path="/users">
                  <Suspense fallback={<div>... LOADING</div>}>
                    <UsersPage />
                  </Suspense>
                </Route>
                <Route path="/messages">
                  <Suspense fallback={<div>... LOADING</div>}>
                    <DialogsPage />
                  </Suspense>
                </Route>
                <Route path="/news"><News /></Route>
                <Route path="/music"><Music /></Route>
                <Route path="/settings"><Settings /></Route>
                <Route path="/login"><LoginPage /></Route>
              </Switch>
            </main>
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  userID: getUserID(state),
});

export default compose(
  connect(mapStateToProps, { getLoginInfoTC }),
  withRouter)(App);
