import React, { useEffect } from "react";
//import * as axios from "axios";
import Header from "./Header";
import { setLoginInfo } from "../../redux/authReducer";
import { connect } from "react-redux";
import { loginInfoGet } from "../../api/usersApi";

const HeaderContainer = (props) => {
  useEffect(() => {
    loginInfoGet().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        props.setLoginInfo(id, email, login);
      }
    });
  }, []);
  console.log(props);
  return <Header {...props} />;
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setLoginInfo })(HeaderContainer);
