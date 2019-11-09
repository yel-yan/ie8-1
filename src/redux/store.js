import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import combineReducers from './reducers.js';
const loggerMiddleware = createLogger()

let store = createStore(combineReducers, applyMiddleware(thunk,loggerMiddleware));

export default store;