import ActionTypes from '../actions/ActionTypes';

const initialState={
    isAuthenticated:false,
    user:{
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",        
        role:"",
    },
}

export default (state=initialState,action={})=>{
    switch(action.type){
        case ActionTypes.STORE_USER:
            return {isAuthenticated:true,...action.user};
        case ActionTypes.SIGN_OUT:
            return initialState;  
    }
}