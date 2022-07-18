import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ad579afb-1bf2-4429-b8c2-c5a2f536784d",
  },
});

// type Responce = {
//   resultCode: number
//   data: {
//     userID: number
//     email: string
//     login: string
//     isAuth: boolean
//   }
// }

export const authAPI = {
  async requestLoginInfo() {
    const responce = await axiosInstance.get(`auth/me`);
    return responce.data;
  },

  login(email: string, password: string, rememberMe=false){
    return axiosInstance.post(`auth/login`,{email, password, rememberMe})
  },

  logout(){
    return axiosInstance.delete(`auth/login`)
  }
};

export const userAPI = {
  reguestAllUsers(currentPage = 1, countUsersOnPage = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${countUsersOnPage}`)
      .then((responce:any) => responce.data);
  },
  
  follow(userID: any) {
    return axiosInstance.post(`follow/${userID}`)
  },

  unfollow(userID: any) {
    return axiosInstance.delete(`follow/${userID}`)
  }
};

export const profileAPI = {
  requestUserProfileInfo(userID: any) {
    return axiosInstance.get(`profile/${userID}`);
  },
  
};
