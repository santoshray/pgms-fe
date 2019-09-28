import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getRooms=()=>{
    return axios.get(
        RESTURLS.ROOMS,
        authUtil.authHeader()
    );
}

const getRoom=(roomId)=>{
    return axios.get(
        RESTURLS.ROOMS+'/'+roomId,
        authUtil.authHeader()
    );
}

const createRoom=(payload)=>{
    return axios.post(
        RESTURLS.ROOMS,
        payload,
        authUtil.authHeader()
        );
}

const updateRoom=(payload)=>{
    return axios.put(
        RESTURLS.ROOMS,
        payload,
        authUtil.authHeader()
        );
}


export default {
    getRooms:getRooms,
    getRoom:getRoom,
    createRoom:createRoom,
    updateRoom:updateRoom
}
