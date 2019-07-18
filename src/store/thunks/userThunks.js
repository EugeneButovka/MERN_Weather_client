import axios from "axios";
import {
    REGISTER_USER_ATTEMPT,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    
    LOGIN_USER_ATTEMPT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "../actionTypes";

export const loginUserAction = user => async dispatch => {
    console.log('Login attempt: ', user);
    dispatch({
        type: LOGIN_USER_ATTEMPT
    });
    
    await axios
        .post('/auth/login', user)
        .then(res => {
            console.log('Login success: ', res.data);
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: res.data
            });
        })
        .catch(error => {
            console.log('Login error: ', error);
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: error
            });
        });
};

export const registerUserAction = user => async dispatch => {
    console.log('Register attempt: ', user);
    dispatch({
        type: REGISTER_USER_ATTEMPT
    });
    
    await axios
        .post('/auth/register', user)
        .then(res => {
            console.log('Register success: ', res.data);
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res.data
            });
        })
        .catch(error => {
            console.log('Register error: ', error);
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: error
            });
        });
};
