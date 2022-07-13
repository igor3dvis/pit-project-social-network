import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { logoutTC } from "../../redux/authReducer";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userID: state.auth.userID
});

export default compose(connect(mapStateToProps, {logoutTC}))(HeaderContainer);
