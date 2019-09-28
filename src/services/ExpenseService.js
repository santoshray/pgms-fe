import RESTURLS from '../constants/RestUrls';
import axios from 'axios';
import authUtil from '../util/AuthUtil';

const getExpenseListAjax=()=>{
    console.log("calling getExpenseListAjax");
    return axios.get(
        RESTURLS.EXPENSE_ROOT,
        authUtil.authHeader()
    );
}

const createExpenseAjax=(payload)=>{
    console.log("calling createExpenseAjax");
    console.log(payload);
    return axios.post(
        RESTURLS.EXPENSE_CREATE,
        payload,
        authUtil.authHeader()
        );
}

const updateExpenseAjax=(payload)=>{
    console.log("calling updateExpenseAjax");
    return axios.put(
        RESTURLS.EXPENSE_UPDATE,
        payload,
        authUtil.authHeader()
        );
}

const deleteExpenseAjax=(payload)=>{
    console.log("calling deleteExpenseAjax");

    return axios.put(
        RESTURLS.DELETE,
        payload,
        authUtil.authHeader()
        );
}


export default {
    getExpenseList:getExpenseListAjax,
    createExpense:createExpenseAjax,
    updateUser:updateExpenseAjax,
    deleteExpense:deleteExpenseAjax
}
