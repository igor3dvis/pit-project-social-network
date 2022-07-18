import { userAPI } from '../api/api'
import { TInitialStateUsers, TUser } from '../typesModels/types'

const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUTN = 'SET_TOTAL_USERS_COUTN'
const SET_COUNT_USERS_ON_PAGE = 'SET_COUNT_USERS_ON_PAGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FETCH_IN_PROCESS = 'TOGGLE_FETCH_IN_PROCESS'



let initialState: TInitialStateUsers = {
  users: [],
  countUsersOnPage: 10,
  currentPage: 1,
  isFetching: false,
  fetchInProcess: [],
}

export const usersReducer = (state = initialState, action: any): TInitialStateUsers => {
  switch (action.type) {
    case FOLLOWED:
      return { ...state,
                users: state.users.map((user) => {
                  if (user.id === action.userID) {
                    return { ...user, followed: true }
                  }
                  return user
                }),
      }

    case UNFOLLOWED:
      return { ...state,
                users: state.users.map((user) => {
                  if (user.id === action.userID) {
                    return { ...user, followed: false }
                  }
                  return user
                }),
      };

    case SET_USERS:
      return { ...state, users: [...action.users]
        // users: [...state.users, ...action.users], // such can use if "show more"
      };

    case SET_TOTAL_USERS_COUTN:
      return { ...state, totalUsersCount: action.count }

    case SET_COUNT_USERS_ON_PAGE:
      return { ...state, countUsersOnPage: action.count }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.flag }

    case TOGGLE_FETCH_IN_PROCESS:
      return { ...state,
          fetchInProcess: action.flag
            ? [...state.fetchInProcess, action.userId]
            : state.fetchInProcess.filter((id) => id !== action.userId),
      }

    default:
      return state
  }
};

//actions types
type TFollowed = {type: typeof FOLLOWED, userID: number}
type TUnfollowed = {type: typeof UNFOLLOWED, userID: number}
type TSetUsers = {type: typeof SET_USERS, users: Array<TUser>}
type TSetTotalUsersCount = {type: typeof SET_TOTAL_USERS_COUTN, count: number}
type TSetCountUsersOnPage = {type: typeof SET_COUNT_USERS_ON_PAGE, count: number}
type TSetCurrentPage = {type: typeof SET_CURRENT_PAGE, page: number}
type TToggleIsFetching = {type: typeof TOGGLE_IS_FETCHING, flag: boolean}
type TToggleFetchInProcess = {type: typeof TOGGLE_FETCH_IN_PROCESS, flag: boolean, userId: number}

//action_creators
export const followed = (userID: number):TFollowed => ({ type: FOLLOWED, userID })
export const unfollowed = (userID: number):TUnfollowed => ({ type: UNFOLLOWED, userID })
export const setUsers = (users: Array<TUser>):TSetUsers => ({ type: SET_USERS, users })
export const setTotalUsersCount = (count: number):TSetTotalUsersCount => ({ type: SET_TOTAL_USERS_COUTN, count })
export const setCountUsersOnPage = (count: number):TSetCountUsersOnPage => ({ type: SET_COUNT_USERS_ON_PAGE, count })
export const setCurrentPage = (page: number):TSetCurrentPage => ({ type: SET_CURRENT_PAGE, page })
export const toggleIsFetching = (flag: boolean):TToggleIsFetching => ({ type: TOGGLE_IS_FETCHING, flag })
export const toggleFetchInProcess = (flag: boolean, userId: number):TToggleFetchInProcess => ({ type: TOGGLE_FETCH_IN_PROCESS, flag, userId })

//thunk_creators
export const getUserTC = (currentPage: number, countUsersOnPage: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const data = await userAPI.reguestAllUsers(currentPage, countUsersOnPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }

export const unfollowTC = (id: number) => async (dispath: any) => {
    dispath(toggleFetchInProcess(true, id))
    const responce = await userAPI.unfollow(id)
    {(responce.data.resultCode === 0) && dispath(unfollowed(id))}
    dispath(toggleFetchInProcess(false, id))
  }

export const followTC = (id: number) => async (dispath: any) => {
    dispath(toggleFetchInProcess(true, id))
    const responce = await userAPI.follow(id)
    {(responce.data.resultCode === 0) && dispath(followed(id))}
    dispath(toggleFetchInProcess(false, id))
  }
