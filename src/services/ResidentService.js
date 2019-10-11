import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getResidents=()=>{
    console.log("calling getResidents");

    return axios.get(
        RESTURLS.RESIDENTS,
        authUtil.authHeader()
    );
}

const getResidentProfile=(residentId)=>{
    console.log("calling getResidentProfile");

    return axios.get(
        RESTURLS.RESIDENT_ROOT+'/'+residentId,
        authUtil.authHeader()
    );
}

const registerResident=(payload)=>{
    console.log("registerResident");

    console.log(payload);
    return axios.post(
        RESTURLS.RESIDENT_CREATE,
        payload,
        authUtil.authHeader()
        );
}

const updateResidentInfo=(payload)=>{
    console.log("updateResidentInfo");
    console.log(payload);
    return axios.post(
        RESTURLS.RESIDENT_UPDATE,
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
