import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Unity } from 'react-unity-webgl';
import { Message } from 'react-unity-webgl';

//import {} from './loginPage.actions';

class UnityPage extends Component {

  onClick () {
	//Message("Falling Cube", "Bounce");
	console.log("Warning: Sent bounce messgae");
  }

  render() {
    return (
	<div className="app">
	   <Unity src="Build/blocking_demo.json" />
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
)(UnityPage);


