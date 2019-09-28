import constants from '../constants/Constants';
import jwt_decode from 'jwt-decode';

const getAccessToken = () => {
    return localStorage.getItem(constants.ACCESS_TOKEN);
}

const setAccessToken = (accessToken) => {
    localStorage.setItem(constants.ACCESS_TOKEN, accessToken);
}

const removeAccessToken = (accessToken) => {
    localStorage.removeItem(constants.ACCESS_TOKEN);
}

const header = () => {
    return {
        headers: { 'Content-Type': 'application/json' },
    }
}

const authHeader = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`
        }
    }
}

const getRole = () => {
    if (getAccessToken())
        return jwt_decode(getAccessToken()).role;
}

const getPgId = () => {
    if (getAccessToken())
        return jwt_decode(getAccessToken()).pgId;
}

const getUserId = () => {
    if (getAccessToken())
        return jwt_decode(getAccessToken()).userId;
}

export default {
    getAccessToken: getAccessToken,
    setAccessToken: setAccessToken,
    removeAccessToken: removeAccessToken,
    authHeader: authHeader,
    header: header,
    getRole: getRole,
    getPgId: getPgId,
    getUserId: getUserId
}