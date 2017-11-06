import React, { Component } from 'react';

class LoginBox extends Component {
    render() {
        return (
            <div className="login-box">
                <h2 className="text-center">Theatre Suite</h2>
                <form>
                    <input className="form-control" type="text" name="username" placeholder="Calvin Username" onChange={e => {this.props.handleFieldChange(e)}} />
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={e => {this.props.handleFieldChange(e)}} />
                    <button className="btn btn-primary form-control" type="submit" onClick={this.props.handleLogin}>Log in</button>
                </form>
            </div>
        );
      }
}

export default LoginBox;
