import { unicId } from '../utils/idFromDateTime'
import { profileAPI } from '../api/api'
import { toggleIsFetching } from './usersReducer'
import { TInitialStateProfile } from '../typesModels/types'

const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const UPDATE_TEXT_POST = 'profile/UPDATE-TEXT-POST'
const SET_PROFILE_INFO = 'profile/SET-PROFILE-INFO'

let initialState:TInitialStateProfile = {
  postsData: [{ id: 1, text: "Hello, Word" }],
  postTextDefault: "text new post ...",
  userProfileInfo: null,
}

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let id = unicId()
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: id, text: state.postTextDefault },
        ],
        postTextDefault: "",
      }

    case UPDATE_TEXT_POST:
      return {
        ...state,
        postTextDefault: action.newText,
      }

    case SET_PROFILE_INFO:
      return {
        ...state,
        userProfileInfo: action.info,
      }

    default:
      return state
  }
}

//action_creator
export const addNewPost = () => ({ type: ADD_NEW_POST })
export const updateNewPost = (text: string) => ({ type: UPDATE_TEXT_POST, newText: text })
export const setProfileInfo = (userInfo: any) => ({ type: SET_PROFILE_INFO, info: userInfo })

//thunk_creator
export const userProfileInfoGetTC = (userId: number) => async (dispatch: any) => {
    await dispatch(toggleIsFetching(true))
    const data = await profileAPI.requestUserProfileInfo(userId)
    dispatch(setProfileInfo(data.data))
    dispatch(toggleIsFetching(false))
  }
