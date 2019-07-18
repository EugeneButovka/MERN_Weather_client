import {
    REGISTER_USER_WAIT,

    LOGIN_USER_WAIT
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

