import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import constants from '../constants/Constants';
import authUtil from '../util/AuthUtil';

const signInAjax=(payload)=>{
    return axios.post(
        RESTURLS.SIGN_IN,
        payload,
        authUtil.header()
        );
}

const signUpAjax=(payload)=>{
    return axios.post(
        RESTURLS.SIGN_UP,
        payload,
        authUtil.header()
        );
}

const pgCreateAjax=(payload)=>{
    return axios.post(
        RESTURLS.PGS,
        payload,
        authUtil.header()
        );
}

const signIn = (payload) =>{
    return signInAjax(payload);
}

const signUp = (payload) =>{
    return signUpAjax(payload);
}

const pgCreate = (payload) => {
    return pgCreateAjax(payload);
}

const signOut = ()=>{
    localStorage.removeItem(constants.ACCESS_TOKEN);
}
export default {
    signIn:signIn,
    signUp:signUp,
    signOut:signOut,
    pgCreate:pgCreate
};