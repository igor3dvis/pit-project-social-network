import * as axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const usersGetAll = (currentPage = 1, countUsersOnPage = 10) => {
  return axios
    .get(`${baseURL}users?page=${currentPage}&count=${countUsersOnPage}`, {
      withCredentials: true,
    })
    .then((responce) => responce.data);
};

const loginInfoGet = () => {
  return axios
    .get(`${baseURL}auth/me`, {
      withCredentials: true,
    })
    .then((responce) => responce.data);
};

const userProfileInfoGet = (userID) => {
  return axios
    .get(`${baseURL}profile/${userID}`)
};

export { usersGetAll, loginInfoGet, userProfileInfoGet };

/*
.then(responce => {
  return responce.data
})
*/
