import actionTypes from './ActionTypes';

export const storeUser=(user)=>({
    type:actionTypes.STORE_USER,
    user:user,
});