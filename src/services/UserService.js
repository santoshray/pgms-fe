import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getUsers=()=>{
    return axios.get(
        RESTURLS.USERS,
        authUtil.authHeader()
    );
}

const getUser=(userId)=>{
    return axios.get(
        RESTURLS.USERS+'/'+userId,
        authUtil.authHeader()
    );
}

const registerUser=(payload)=>{
    return axios.post(
        RESTURLS.REGISTER_USER,
        payload,
        authUtil.authHeader()
        );
}

const updateUser=(payload)=>{
    return axios.put(
        RESTURLS.USERS,
        payload,
        authUtil.authHeader()
        );
}


export default {
    getUsers:getUsers,
    getUser:getUser,
    registerUser:registerUser,
    updateUser:updateUser
}
