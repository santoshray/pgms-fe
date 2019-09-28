import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getValue = (lookUpType) => {
    return axios.get(
        RESTURLS.LOOKUP + '/' + lookUpType,
        authUtil.authHeader()
    );
}

export default {
    getValue:getValue
}