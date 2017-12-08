import React, { Component } from 'react';

class NewAccountBox extends Component {

    render() {
        return (
            <div>
                <input className="form-control" type="text" name="firstName" placeholder="First name" onChange={e => {this.props.handleFieldChange(e)}} />
                <input className="form-control" type="text" name="lastName" placeholder="Last name" onChange={e => {this.props.handleFieldChange(e)}} />
                <input className="form-control" type="text" name="username" placeholder="Enter a username" onChange={e => {this.props.handleFieldChange(e)}} />
                <input className="form-control" type="password" name="password" placeholder="Enter a password" onChange={e => {this.props.handleFieldChange(e)}} />
                <input className="form-control" type="password" name="passwordv" placeholder="Re-enter your password" onChange={e => {this.props.handleFieldChange(e)}} />
                { (this.props.password === this.props.passwordv) ?
                    <p>Passwords match</p>
                    :
                    <p>Passwords don't match</p>
                }
                <button className="btn btn-primary form-control" type="submit" onClick={this.props.handleNewAccount}>Submit</button>
                <button className="btn btn-gray form-control" type="submit" onClick={this.props.newAccount}>Cancel</button>
            </div>
        );
    }

}

export default NewAccountBox;
