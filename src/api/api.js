import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ad579afb-1bf2-4429-b8c2-c5a2f536784d",
  },
});

export const userAPI = {
  loginInfoGet() {
    return axiosInstance.get(`auth/me`).then((responce) => responce.data);
  },

  usersGetAll(currentPage = 1, countUsersOnPage = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${countUsersOnPage}`)
      .then((responce) => responce.data);
  },
  
  userProfileInfoGet(userID) {
    return axiosInstance.get(`profile/${userID}`);
  },

  followPost(userID) {
    return axiosInstance.post(`follow/${userID}`)
  },

  unfollowDelete(userID) {
    return axiosInstance.delete(`follow/${userID}`)
  }
};

/*
.then(responce => {
  return responce.data
})
*/
