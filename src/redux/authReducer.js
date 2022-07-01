import { userAPI } from "../api/api";

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
          ...action.data,
          isAuth: true
      };

    default:
      return state;
  }
};

export const setLoginInfo = (userID, email, login) => ({
  type: SET_LOGIN_INFO,
  data:{userID, email, login},
});

export const letLoginInfoThunkCreator = () => {
  return (dispatch) => {
    userAPI.loginInfoGet().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setLoginInfo(id, email, login));
      }
    });

  }
} 

