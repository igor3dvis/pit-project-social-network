import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { loginTC } from "../../redux/authReducer";
import LoginModal from "./LoginModal";
import styles from "./LoginPage.module.scss";


const LoginPage = (props) => {
  console.log(props);
  return (
    (props.isAuth) 
      ?<Redirect to='/profile' />
      :<div className={styles.loginModal}>
        <LoginModal loginTC={props.loginTC}/>
      </div>
  );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(LoginPage);
