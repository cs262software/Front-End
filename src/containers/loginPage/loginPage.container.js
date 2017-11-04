import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
                { (this.props.postLoginStatus && this.props.postLoginStatus.userId) ?
                    <Redirect to={{
                        pathname: '/',
                        state: { from: this.props.location }
                    }}/> :

                    <LoginBox
                        loginStatus={this.props.loginStatus}
                        handleFieldChange={this.handleFieldChange}
                        handleLogin={this.handleLogin}
                    />
                }
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

export default connect(mapStateToProps, { postLogin })(LoginPage);
