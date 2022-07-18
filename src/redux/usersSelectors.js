/* // for example with 'reselect' library 
   // in redecer use "superSelector" only

import { createSelector } from 'reselect';

const simpleSelector = (state) => {
    return state.usersPage.users    
}

export const superSelector = createSelector( simpleSelector, (users) => {
    return users.filter(e=>true); // "filter" or another dificult actions    
})

*/

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount    
}

export const getCountUsersOnPage = (state) => {
    return  state.usersPage.countUsersOnPage
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFetchInProcess = (state) => {
    return  state.usersPage.fetchInProcess
}
  