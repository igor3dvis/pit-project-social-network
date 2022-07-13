import { authAPI } from "../api/api";

const SET_LOGIN_INFO = "SET_LOGIN_INFO";

const initionalizeState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};

export const authReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
          ...state,
          ...action.payload,
      };

    default:
      return state;
  }
};
//action_creator
export const setLoginInfo = (userID, email, login, isAuth) => ({
  type: SET_LOGIN_INFO,
  payload:{userID, email, login, isAuth},
});
//thunk_creator
export const getLoginInfoTC = () => (dispatch) => {
  authAPI.loginInfoGet()
      .then(data => {
          if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setLoginInfo(id, email, login, true));
          }
      });
}
//thunk_creator
export const loginTC = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
      .then((responce) => {
          if (responce.data.resultCode === 0) {
            dispatch(getLoginInfoTC());
          }
      });
}
//thunk_creator
export const logoutTC = () => (dispatch) => {
  authAPI.logout()
      .then((responce) => {
        console.log(responce);
          if (responce.data.resultCode === 0) {
            dispatch(setLoginInfo(null, null, null, false));
          }
      });
}
 

