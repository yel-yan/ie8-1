import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from "bundle-loader?lazy&name=home!pages/Home";
import UnCheck from "bundle-loader?lazy&name=unCheck!pages/UnCheck";
import Approve from "bundle-loader?lazy&name=approve!pages/Approve";
import DocSign from "bundle-loader?lazy&name=docSign!pages/DocSign";
import News from "bundle-loader?lazy&name=news!pages/News";
import Schedule from "bundle-loader?lazy&name=schedule!pages/Schedule";

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default (match) => (
    <Switch>
        <Route path={`${match.path}`} exact component={createComponent(Home)} />
        <Route path={`${match.path}/uncheck`} component={createComponent(UnCheck)} />
        <Route path={`${match.path}/approve`} component={createComponent(Approve)} />
        <Route path={`${match.path}/docsign`} component={createComponent(DocSign)} />
        <Route path={`${match.path}/news`} component={createComponent(News)} />
        <Route path={`${match.path}/schedule`} component={createComponent(Schedule)} />
        <Redirect to={`${match.url}`} />
    </Switch>
);
