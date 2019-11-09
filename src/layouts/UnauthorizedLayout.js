import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import LoginPage from '../components/login/Login'
import passwordPage from '../components/password-change/PasswordChange'

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/password" component={passwordPage} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
)

export default UnauthorizedLayout