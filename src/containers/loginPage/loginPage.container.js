import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'connected-react-router';
import LoginBox from './components/loginBox.js';
import { postLogin } from './loginPage.actions';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount() {
        this.props.push('/login');
    }

    handleFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin() {
        let creds = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.postLogin(creds);
    }

    render() {
        return (
            <div className="login-bg">
                <LoginBox
                    loginStatus={this.props.loginStatus}
                    handleFieldChange={this.handleFieldChange}
                    handleLogin={this.handleLogin}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        postLoginStatus: state.loginPageReducers.postLoginStatus.data
    };
}

export default connect(mapStateToProps, { postLogin, push })(LoginPage);
