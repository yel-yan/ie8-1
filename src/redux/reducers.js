import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import loggedUserReducer from 'reducers/loggedUserReducer'


export default combineReducers({
    counter,
    userInfo,
    loggedUserReducer
});