import React, { Component } from 'react';

class LoginBox extends Component {
    render() {
        return (
            <div>
                <input type="text" name="username" placeholder="Calvin Username" onChange={e => {this.props.handleFieldChange(e)}} />
                <input type="password" name="password" placeholder="Password" onChange={e => {this.props.handleFieldChange(e)}} />
                <button className="btn btn-primary form-control" type="submit" onClick={this.props.handleLogin}>Sign in</button>
            </div>


        );
      }
}

export default LoginBox;
