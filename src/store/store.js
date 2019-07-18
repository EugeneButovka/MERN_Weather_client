import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

import userReducer from "./reducers/userReducer";

const combinedReducers = combineReducers({
    userStore: userReducer
});

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;
