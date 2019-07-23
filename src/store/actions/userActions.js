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



export const registerUserRequestAction = () => ({
    type: REGISTER_USER_REQUEST,
});

export const registerUserSuccessAction = (payload) => ({
    type: REGISTER_USER_SUCCESS,
    payload: payload
});

export const registerUserFailAction = (payload) => ({
    type: REGISTER_USER_FAIL,
    payload: payload
});






export const loginUserRequestAction = () => ({
    type: LOGIN_USER_REQUEST,
});

export const loginUserSuccessAction = (payload) => ({
    type: LOGIN_USER_SUCCESS,
    payload: payload
});

export const loginUserFailAction = (payload) => ({
    type: LOGIN_USER_FAIL,
    payload: payload
});




export const checkLoginRequestAction = () => ({
    type: CHECK_LOGIN_REQUEST,
});

export const checkLoginSuccessAction = (payload) => ({
    type: CHECK_LOGIN_SUCCESS,
    payload: payload
});

export const checkLoginFailAction = (payload) => ({
    type: CHECK_LOGIN_FAIL,
    payload: payload
});





export const logoutUserAction = () => {
    return {
        type: LOGOUT_USER
    };
};