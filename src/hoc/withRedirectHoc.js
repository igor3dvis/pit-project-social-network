import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withRedirectHoc = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
  
  return connect(mapStateToProps)(RedirectComponent);
};
