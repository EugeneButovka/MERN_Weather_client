import {instance} from "../../core/axios";
import { loginUserAttemptAction, loginUserSuccessAction, loginUserFailAction } from '../actions/userActions';
import {
    REGISTER_USER_ATTEMPT,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    
    LOGIN_USER_ATTEMPT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "../actionTypes";

export const loginUser = user => async dispatch => {
    console.log('Login attempt: ', user);
    dispatch(loginUserAttemptAction());
    
    try {
        const res = await instance.post('/auth/login');
        dispatch(loginUserSuccessAction(res));
        localStorage.setItem('token', res.token)
    } catch (error) {
        console.log('Login error: ', error);
        dispatch(loginUserFailAction(error));
    }
   
    
    // await axios
    //     .post('/auth/login', user)
    //     .then(res => {
    //         console.log('Login success: ', res.data);
    //         dispatch({
    //             type: LOGIN_USER_SUCCESS,
    //             payload: res.data
    //         });
    //     })
    //     .catch(error => {
    //         console.log('Login error: ', error);
    //         dispatch({
    //             type: LOGIN_USER_FAIL,
    //             payload: error
    //         });
    //     });
};

export const registerUser = user => async dispatch => {
    console.log('Register attempt: ', user);
    dispatch({
        type: REGISTER_USER_ATTEMPT
    });
    
    // await axios
    //     .post('/auth/register', user)
    //     .then(res => {
    //         console.log('Register success: ', res.data);
    //         dispatch({
    //             type: REGISTER_USER_SUCCESS,
    //             payload: res.data
    //         });
    //     })
    //     .catch(error => {
    //         console.log('Register error: ', error);
    //         dispatch({
    //             type: REGISTER_USER_FAIL,
    //             payload: error
    //         });
    //     });
};

export const checkLogin = () => async dispatch => {
    dispatch({
        type: 'CHECK_LOGIN_REQUEST'
    });
    try {
        const res = await instance.post('/auth/checkLogin');
        dispatch({
            type: 'CHECK_LOGIN_SUCCESS',
            payload: res.data
        });
    } catch (error) {
        console.log('Login error: ', error);
        dispatch({
            type: 'CHECK_LOGIN_FAIL',
            payload: error
        });
    }
};
