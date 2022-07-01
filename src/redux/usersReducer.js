import { userAPI } from "../api/api";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUTN = "SET_TOTAL_USERS_COUTN";
const SET_COUNT_USERS_ON_PAGE = "SET_COUNT_USERS_ON_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FETCH_IN_PROCESS = "TOGGLE_FETCH_IN_PROCESS";

let initionalizeState = {
  users: [],
  countUsersOnPage: 10,
  currentPage: 1,
  isFetching: false,
  fetchInProcess: [],
};
// let initionalizeState = {
//   users: [
//     {
//       id: 1,
//       avatar:
//         "https://store.playstation.com/store/api/chihiro/00_09_000/container/PT/pt/19/EP4396-CUSA10659_00-AV00000000000112/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
//       name: "Ivasyk",
//       surName: "Aitenko",
//       location: {
//         city: "Kyiv",
//         country: "Ukraine",
//       },
//       followed: true,
//     },
//     {
//       id: 2,
//       avatar:
//         "https://store.playstation.com/store/api/chihiro/00_09_000/container/PT/pt/19/EP4396-CUSA10659_00-AV00000000000112/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
//       name: "Ivasyk",
//       surName: "Aitenko",
//       location: {
//         city: "Kyiv",
//         country: "Ukraine",
//       },
//       followed: true,
//     },
//   ],
// };

export const usersReducer = (state = initionalizeState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOWED:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        // users: [...state.users, ...action.users], // such can use if "show more"
        users: [...action.users],
      };

    case SET_TOTAL_USERS_COUTN:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case SET_COUNT_USERS_ON_PAGE:
      return {
        ...state,
        countUsersOnPage: action.count,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.flag,
      };

    case TOGGLE_FETCH_IN_PROCESS:
      return {
        ...state,
        fetchInProcess: action.flag
          ? [...state.fetchInProcess, action.userId]
          : state.fetchInProcess.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followed = (userID) => ({ type: FOLLOWED, userID });
export const unfollowed = (userID) => ({ type: UNFOLLOWED, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUTN,
  count,
});
export const setCountUsersOnPage = (count) => ({
  type: SET_COUNT_USERS_ON_PAGE,
  count,
});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const toggleIsFetching = (flag) => ({ type: TOGGLE_IS_FETCHING, flag });
export const toggleFetchInProcess = (flag, userId) => ({
  type: TOGGLE_FETCH_IN_PROCESS,
  flag,
  userId,
});

export const getUserThunkCreator = (currentPage, countUsersOnPage) => {
  return (dispatch) => {

    dispatch(toggleIsFetching(true));

    userAPI.usersGetAll(currentPage, countUsersOnPage).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const unfollowThunkCreator = (id) => {
  return (dispath) => {
    dispath(toggleFetchInProcess(true, id));
    userAPI.unfollowDelete(id).then((responce) => {
      if (responce.data.resultCode === 0) {
        dispath(unfollowed(id));
      }
      dispath(toggleFetchInProcess(false, id));
    });
  }
}

export const followThunkCreator = (id) => {
  return (dispath) => {
    dispath(toggleFetchInProcess(true, id));
    userAPI.followPost(id).then((responce) => {
      if (responce.data.resultCode === 0) {
        dispath(followed(id));
      }
      dispath(toggleFetchInProcess(false, id));
    });
  }
}
