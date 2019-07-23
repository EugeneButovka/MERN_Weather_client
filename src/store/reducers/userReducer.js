import {

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    

    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    

    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAIL,
    
    LOGOUT_USER
} from "../actionTypes";

const initialState = {
    //userData: {},
    isLogined: false,
    requestCompleted: false,
    error: null,
    currentUserId: null,
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        //register routine
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                //isLogined: true, //performing login in a separate action
                requestCompleted: true,
                error: null,
                isLoading: false
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                requestCompleted: true,
                error: 'fail to register',
                isLoading: false
            };
        
        //login routine
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_USER_SUCCESS:
            console.log(action);
            return {
                ...state,
                isLogined: true,
                requestCompleted: true,
                error: null,
                currentUserId: action.payload.currentUserId,
                isLoading: false
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLogined: false,
                requestCompleted: true,
                error: 'fail to login',
                isLoading: false
            };
    
    
        //check login routine
        case CHECK_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case CHECK_LOGIN_SUCCESS:
            return {
                ...state,
                isLogined: true,
                requestCompleted: true,
                error: null,
                isLoading: false
            };
        case CHECK_LOGIN_FAIL:
            return {
                ...state,
                isLogined: false,
                requestCompleted: true,
                error: 'check login fail',
                currentUserId: null,
                isLoading: false
            };
            
            
    
        case LOGOUT_USER:
            return {
                ...state,
                isLogined: false,
                requestCompleted: true,
                error: null,
                currentUserId: null
            };
            
            
        //default routine
        default:
            return state;
    }
}