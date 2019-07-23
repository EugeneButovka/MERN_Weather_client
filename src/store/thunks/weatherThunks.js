import {instance, weatherInstance} from "../../core/axios";
import {
    getWeatherRequestAction,
    getWeatherSuccessAction,
    getWeatherFailAction,
    
    saveWeatherDataRequestAction,
    saveWeatherDataSuccessAction,
    saveWeatherDataFailAction
} from '../actions/weatherActions';


export const getWeather = (lat, long) => async dispatch => {
    console.log('Weather API request');
    dispatch(getWeatherRequestAction());
    
    try {
        const res = await weatherInstance.get(`/forecast?appid=0b078dc7f8ba04372a3c93f3eecba42c&units=metric&lat=${lat}&lon=${long}`);
        await instance.post('/api/weather', res.data);
        console.log('Weather API get and save to DB success: ', res.data);
        dispatch(getWeatherSuccessAction(res.data));
    } catch (error) {
        console.log('Weather API get and save to DB error: ', error);
        dispatch(getWeatherFailAction(error));
    }
};


//can be removed safely
export const saveWeatherData = data => async dispatch => {
    console.log('Saving data to DB: ', data);
    dispatch(saveWeatherDataRequestAction());
    
    let res = null;
    try {
        res = await instance.post('/api/weather', data);
        console.log('Save weather data success: ', res.data);
        dispatch(saveWeatherDataSuccessAction(res.data));
    } catch (error) {
        console.log('Save weather data error: ', error.response);
        dispatch(saveWeatherDataFailAction(error));
    }
};


export const getWeatherHistory = () => async dispatch => {
    console.log('Weather History request');
    dispatch(getWeatherHistoryRequestAction());
    
    try {
        const res = await instance.get('/api/weather');
        console.log('Weather history list obtained: ', res.data);
        dispatch(getWeatherHistorySuccessAction(res.data));
    } catch (error) {
        console.log('Weather history list error: ', error);
        dispatch(getWeatherHistoryFailAction(error));
    }
};