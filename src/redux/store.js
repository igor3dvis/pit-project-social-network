import { createStore, combineReducers } from 'redux'
import {profileReducer} from './profileReducer'
import {messagesReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'

let reducersBank = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore( reducersBank );

export default store;