import {
    REGISTER_USER_WAIT,
    REGISTER_USER_ATTEMPT,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    
    LOGIN_USER_WAIT,
    LOGIN_USER_ATTEMPT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "../actionTypes";

const initialState = {
    userData: {},
    isLogined: false,
    isLoading: false,
    error: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        //register routine
        case REGISTER_USER_WAIT:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_USER_ATTEMPT:
            return {
                ...state,
                error: ''
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                error: ''
            };
        case REGISTER_USER_FAIL:
            return {
                ...initialState,
                error: 'fail to register'
            };
        
        //login routine
        case LOGIN_USER_WAIT:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_USER_ATTEMPT:
            return {
                ...state,
                error: ''
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLogined: true,
                isLoading: false,
                error: ''
            };
        case LOGIN_USER_FAIL:
            return {
                ...initialState,
                error: 'fail to login'
            };
    
        //default routine
        default:
            return state;
    }
}