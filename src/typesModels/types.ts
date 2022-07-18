//userReducer types
export interface IPhotos {
    small?: string | null
    large?: string | null
}

export type TUser = {
    id: number
    name: string
    status?: string | null
    photos: IPhotos
    followed: boolean
}

export type TInitialStateUsers = {
    users: Array<TUser>
    countUsersOnPage: number,
    currentPage: number,
    isFetching: boolean,
    fetchInProcess: Array<any>,
    totalUsersCount?: number
  }
// dialogReducer types
export type TDialog = {
    id: number
    name: string
}
  
export type TMessage = {
    messageText: string
}

// profileReducer types
interface IContacts  {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
    
type TUserProfileInfo = {
    userId: number
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string
    contacts: IContacts
}

interface IPostData  {
    id: number
    text: string
  }
  
export type TInitialStateProfile = {
    postsData: Array<IPostData>
    postTextDefault: string
    userProfileInfo: TUserProfileInfo | null
}
  

    

