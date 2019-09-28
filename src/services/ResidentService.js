import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getResidents=()=>{
    return axios.get(
        RESTURLS.RESIDENTS,
        authUtil.authHeader()
    );
}

const getResidentProfile=(residentId)=>{
    return axios.get(
        RESTURLS.RESIDENTS+'/'+residentId,
        authUtil.authHeader()
    );
}

const registerResident=(payload)=>{
	console.log(payload)
    return axios.post(
        RESTURLS.REGISTER_RESIDENT,
        payload,
        authUtil.authHeader()
        );
}

const updateResidentInfo=(payload)=>{
    return axios.put(
        RESTURLS.RESIDENTS,
        payload,
        authUtil.authHeader()
        );
}


export default {
    getResidents:getResidents,
    getResident:getResidentProfile,
    registerResident:registerResident,
    updateResidentInfo:updateResidentInfo
}
