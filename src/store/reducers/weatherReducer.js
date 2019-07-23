import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
    
    CLEAR_WEATHER_DATA,
    
    SAVE_WEATHER_DATA_REQUEST,
    SAVE_WEATHER_DATA_SUCCESS,
    SAVE_WEATHER_DATA_FAIL
} from "../actionTypes";

const initialState = {
    weatherData: {},
    requestCompleted: false,
    error: null,
    isLoading: false,
    isSaving: false,
    saveCompleted: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        //weather request routine
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                weatherData: action.payload,
                requestCompleted: true,
                error: null,
                isLoading: false
            };
        case GET_WEATHER_FAIL:
            return {
                ...state,
                weatherData: null,
                requestCompleted: true,
                isLoading: false,
                error: 'weather request fail'
            };
    
    
        case CLEAR_WEATHER_DATA:
            return {
                ...state,
                weatherData: null,
                requestCompleted: false,
                isLoading: false,
                error: null
            };
            
    
        case SAVE_WEATHER_DATA_REQUEST:
            return {
                ...state,
                isSaving: true
            };
        case SAVE_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                saveCompleted: true,
                error: null,
                isSaving: false
            };
        case SAVE_WEATHER_DATA_FAIL:
            return {
                ...state,
                saveCompleted: false,
                isSaving: false,
                error: 'weather save fail'
            };
            
            
        //default routine
        default:
            return state;
    }
}