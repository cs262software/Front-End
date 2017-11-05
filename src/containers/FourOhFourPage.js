import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainHeader from './mainHeader/mainHeader.container';

class FourOhFourPage extends Component {

    render() {
        return (
            <Redirect to='/'/>
        );
    }

}

// function mapStateToProps(state) {
//     // retrieve values from the Redux state here
//     return {
//         // prop: reduxValue
//     };
// }
//
// export default connect(
//     mapStateToProps,
//     {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
//     }
// )(FourOhFourPage);

export default FourOhFourPage;
