import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
    
    CLEAR_WEATHER_DATA,
    
    SAVE_WEATHER_DATA_REQUEST,
    SAVE_WEATHER_DATA_SUCCESS,
    SAVE_WEATHER_DATA_FAIL
} from "../actionTypes";



export const getWeatherRequestAction = () => ({
    type: GET_WEATHER_REQUEST,
});

export const getWeatherSuccessAction = (payload) => ({
    type: GET_WEATHER_SUCCESS,
    payload: payload
});

export const getWeatherFailAction = (payload) => ({
    type: GET_WEATHER_FAIL,
    payload: payload
});



export const clearWeatherDataAction = () => ({
    type: CLEAR_WEATHER_DATA,
});


export const saveWeatherDataRequestAction = () => ({
    type: SAVE_WEATHER_DATA_REQUEST,
});

export const saveWeatherDataSuccessAction = (payload) => ({
    type: SAVE_WEATHER_DATA_SUCCESS,
    payload: payload
});

export const saveWeatherDataFailAction = (payload) => ({
    type: SAVE_WEATHER_DATA_FAIL,
    payload: payload
});



export const getWeatherRequestAction = () => ({
    type: GET_WEATHER_REQUEST,
});

export const getWeatherSuccessAction = (payload) => ({
    type: GET_WEATHER_SUCCESS,
    payload: payload
});

export const getWeatherFailAction = (payload) => ({
    type: GET_WEATHER_FAIL,
    payload: payload
});