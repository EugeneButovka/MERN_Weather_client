import {
    GET_WEATHER_HISTORY_REQUEST,
    GET_WEATHER_HISTORY_SUCCESS,
    GET_WEATHER_HISTORY_FAIL
} from "../actionTypes";

const initialState = {
    historyData: {},
    error: null,
    isHistoryLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_HISTORY_REQUEST:
            return {
                ...state,
                isHistoryLoading: true
            };
        case GET_WEATHER_HISTORY_SUCCESS:
            return {
                ...state,
                error: null,
                isHistoryLoading: false,
                historyData: action.payload
            };
        case GET_WEATHER_HISTORY_FAIL:
            return {
                ...state,
                isHistoryLoading: false,
                error: 'weather save fail'
            };
            
            
        //default routine
        default:
            return state;
    }
}