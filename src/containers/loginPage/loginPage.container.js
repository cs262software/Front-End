import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginBox from './components/loginBox.js';
import { getLogin } from './loginPage.actions';

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
        console.log(this.state.username + " " + this.state.password)
        let creds = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.getLogin(creds);
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
        // loginStatus: state.login.getLoginStatus.data
    };
}

export default connect(mapStateToProps, { getLogin })(LoginPage);
