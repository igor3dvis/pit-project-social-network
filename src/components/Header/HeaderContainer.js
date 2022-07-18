import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { logoutTC } from "../../redux/authReducer";
import { getIsAuth, getLogin, getUserID } from "../../redux/authSelectors";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login:  getLogin(state),
  userID: getUserID(state),
});

export default compose(connect(mapStateToProps, {logoutTC}))(HeaderContainer);
