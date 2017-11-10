import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';

class FilesPage extends Component {

    render() {
        return (
            <div>
                <MainHeader />
                <h1>Files Page</h1>
                <p>10 points to Ravenclaw for Lydia figuring crap out at 2:30am!</p>
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
)(FilesPage);
