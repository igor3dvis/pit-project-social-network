import { createStore, combineReducers } from 'redux'
import {profileReducer} from './reducerProfile'
import {messagesReducer} from './reducerMessages'

let reducersBank = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
})

let store = createStore( reducersBank );

export default store;