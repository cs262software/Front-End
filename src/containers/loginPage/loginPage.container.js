import React, { Component } from 'react';
import { connect } from 'react-redux';

//import {} from './loginPage.actions';

class LoginPage extends Component {
  render() {
    return (
        <p>LoginPage</p>
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
)(LoginPage);