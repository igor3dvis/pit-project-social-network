import * as axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ad579afb-1bf2-4429-b8c2-c5a2f536784d",
  },
});

export const authAPI = {
  loginInfoGet() {
    return axiosInstance.get(`auth/me`).then((responce) => responce.data);
  },

  login(email, password, rememberMe=false){
    return axiosInstance.post(`auth/login`,{email, password, rememberMe})
  },

  logout(){
    return axiosInstance.delete(`auth/login`)
  }
  
};

export const userAPI = {
  usersGetAll(currentPage = 1, countUsersOnPage = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${countUsersOnPage}`)
      .then((responce) => responce.data);
  },
  
  followPost(userID) {
    return axiosInstance.post(`follow/${userID}`)
  },

  unfollowDelete(userID) {
    return axiosInstance.delete(`follow/${userID}`)
  }
};

export const profileAPI = {
  userProfileInfoGet(userID) {
    return axiosInstance.get(`profile/${userID}`);
  },
  
};

/*
.then(responce => {
  return responce.data
})
*/
