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


export const setLoginUserWaitAction = () => {
    return {
        type: LOGIN_USER_WAIT
    };
};


export const setRegisterUserWaitAction = () => {
    return {
        type: REGISTER_USER_WAIT
    };
};


export const loginUserAttemptAction = () => ({
    type: LOGIN_USER_ATTEMPT,
});

export const loginUserSuccessAction = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload: payload
});

export const loginUserFailAction = (payload) => ({
    type: LOGIN_USER_FAIL,
    payload: payload
});


