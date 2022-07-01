import { createStore, combineReducers, applyMiddleware } from 'redux'
import {profileReducer} from './profileReducer'
import {messagesReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducersBank = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore( reducersBank, applyMiddleware(thunkMiddleware) );

export default store;