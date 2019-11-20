import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import combineReducers from './reducers.js';
const middlewares = [thunk];
console.log(process.env.NODE_ENV)
// 开发环境时，设置redux-logger中间件
if (!process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);//npm run build打包时，注释这行
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware);
}

let store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;