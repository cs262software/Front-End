import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {} from './loginPage.actions';

class LoginBox extends Component {
    render() {
        return (
            <div className="login-box">
                <h2>Theatre Software Suite</h2>

                <div className="login-card">
                    <input type="text" name="username" placeholder="Username" onChange={e => {this.props.handleFieldChange(e)}} />
                    <input type="password" name="password" placeholder="Password" onChange={e => {this.props.handleFieldChange(e)}} />
                    <button className="btn btn-primary" onClick={this.props.handleLogin}>Submit</button>
                </div>
            </div>
        );
      }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        // prop: reduxValue
    };
}

export default connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(LoginBox);
