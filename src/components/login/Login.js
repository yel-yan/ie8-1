import React from "react";
import LoginForm from './LoginForm'
import Cookies from 'js-cookie';

import "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    loginSuccess() {
        this.props.history.push('/app');
        console.log("登录成功跳转main")
    }

    render() {
        return (
            <div className='login-main'>
                <div className="login-wrapper">
                    <div className="login-form-wrapper">
                        <LoginForm history={this.props.history} onSubmitSuccess={this.loginSuccess.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
