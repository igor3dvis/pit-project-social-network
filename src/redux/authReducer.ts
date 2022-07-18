import { authAPI } from '../api/api'

const SET_LOGIN_INFO = 'auth/SET_LOGIN_INFO'

export type initialStateType = {
  userID: number | null
  email: string | null
  login: string | null
  isAuth: boolean 
  isFetching: boolean 
}

const initialState: initialStateType = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
}

export const authReducer = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
          ...state,
          ...action.payload,
      }

    default:
      return state
  }
}

type TPayload = {
    userID: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type TSetLoginInfo = {
  type: typeof SET_LOGIN_INFO,
  payload: TPayload
}

//action_creator
export const setLoginInfo = ( userID:number | null,  email:string | null, 
                              login:string | null, isAuth:boolean):TSetLoginInfo => ({
  type: SET_LOGIN_INFO,
  payload:{userID, email, login, isAuth},
})

//thunk_creator
export const getLoginInfoTC = () => async (dispatch:any) => {
  const responce = await authAPI.requestLoginInfo()
  if (responce.resultCode === 0) {
    let { id, email, login } = responce.data
    dispatch(setLoginInfo(id, email, login, true))
  }
}

export const loginTC = (email:string, password:string, rememberMe:boolean) => async (dispatch:any) => {
  const responce = await authAPI.login(email, password, rememberMe)
  if (responce.data.resultCode === 0) {
    dispatch(getLoginInfoTC())
  }
}

export const logoutTC = () => async (dispatch:any) => {
  const responce = await authAPI.logout()
  if (responce.data.resultCode === 0) {
    dispatch(setLoginInfo(null, null, null, false))
  }
}

