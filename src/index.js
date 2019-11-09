import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute'
import history from "./utils/history";
import 'antd/dist/antd.min.css'
import "./main.css";

// Layouts
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import PrimaryLayout from './layouts/PrimaryLayout'

const App = props => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))