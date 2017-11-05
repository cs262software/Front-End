import React, { Component } from 'react';

class LoginBox extends Component {
    render() {
        return (
            <div className="login-box">
                <h2>Theatre Software Suite</h2>
                <form className="login-card">
                    <input type="text" name="username" placeholder="Username" onChange={e => {this.props.handleFieldChange(e)}} />
                    <input type="password" name="password" placeholder="Password" onChange={e => {this.props.handleFieldChange(e)}} />
                    <button className="btn btn-primary" type="submit" onClick={this.props.handleLogin}>Submit</button>
                </form>
            </div>
        );
      }
}

export default LoginBox;
