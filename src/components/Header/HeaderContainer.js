import React, { useEffect } from "react";
import Header from "./Header";
import { letLoginInfoThunkCreator } from "../../redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.letLoginInfoThunkCreator()
  }, []);
  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, { letLoginInfoThunkCreator }))
(HeaderContainer);
