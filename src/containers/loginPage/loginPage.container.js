import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import LoginBox from './components/loginBox.js';
import NewAccountBox from './components/newAccountBox.js';
import { postLogin, postNewUser } from './loginPage.actions';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            passwordv: '',
            newAccount: false,
            firstName: '',
            lastName: ''
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.newAccount = this.newAccount.bind(this);
        this.handleNewAccount = this.handleNewAccount.bind(this);
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

    newAccount() {
        this.setState({ newAccount: !this.state.newAccount })
    }

    handleNewAccount() {
        let data = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        this.props.postNewUser(data);
    }

    render() {
        return (
            <div className="login-bg" style={{backgroundImage: 'url(img/background.png)'}}>
                <div className="login-box">
                    <h2>Theatre Suite</h2>
                    { this.state.newAccount ?
                        <div>
                            <h4>Create an Account</h4>

                            { isNaN(this.props.postNewUserStatus) ?
                                <div>
                                    <p>Account created successfully!</p>
                                    <button className="btn btn-gray form-control" type="submit" onClick={e => {this.newAccount()}}>Back</button>
                                </div>
                                :
                                <NewAccountBox
                                    handleFieldChange={this.handleFieldChange}
                                    password={this.state.password}
                                    passwordv={this.state.passwordv}
                                    handleNewAccount={this.handleNewAccount}
                                    newAccount={this.newAccount}
                                />
                            }
                        </div>
                    :
                        <div>
                            <LoginBox
                                loginStatus={this.props.loginStatus}
                                handleFieldChange={this.handleFieldChange}
                                handleLogin={this.handleLogin}
                            />
                            <br />
                            <p onClick={e => {this.newAccount()}} style={{cursor: 'pointer'}}>New user? Request an account here.</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        postLoginStatus: state.loginPageReducers.postLoginStatus.data,
        postNewUserStatus: state.loginPageReducers.postNewUserStatus.data
    };
}

export default connect(mapStateToProps, { postLogin, postNewUser, push })(LoginPage);
