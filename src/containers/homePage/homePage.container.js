import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';

//import {} from './homePage.actions';

class HomePage extends Component {
  render() {
    return (
        <div>
            <MainHeader />
            <h1>Home Page</h1>
        </div>
    );
  }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        // prop: reduxValue
        //user: state.postLoginStatus
    };
}

export default connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(HomePage);
