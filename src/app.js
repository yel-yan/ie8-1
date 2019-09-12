import React from "react";
import {HashRouter as Router} from 'react-router-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import {notification} from 'antd';

import history from "./utils/history";
import Main from "./main";
import Login from "./components/login/Login";
import PasswordChange from "./components/password-change/PasswordChange";

console.log('app');

const App = () =>
    <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/password-change' exact component={PasswordChange}/>
        <Route path='/' component={Main}/>
    </Switch>


export default App;
