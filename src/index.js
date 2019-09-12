import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import history from "./utils/history";
import App from './app';
import 'antd/dist/antd.min.css'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

