import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import HomePage from '../containers/homePage/homePage.container';
import SchedulePage from '../containers/schedulePage/schedulePage.container';
import ScriptPage from '../containers/scriptPage/scriptPage.container';
import ManageFilesPage from '../containers/manageFilesPage/manageFiles.container';
import FourOhFourPage from '../containers/FourOhFourPage';
import LoginPage from '../containers/loginPage/loginPage.container';


class Routes extends Component {
  render() {
    return (
        <div>
            { (this.props.postLoginStatus && this.props.postLoginStatus.userID) ?
                <Switch>
                    <Route exact path='/' component={ScriptPage}/>
                    <Route exact path='/schedule' component={SchedulePage}/>
                    <Route exact path='/director/manage-files' component={ManageFilesPage}/>
                    <Route component={FourOhFourPage}/>
                </Switch> :
                <Route component={LoginPage}/>
            }
        </div>
    );
  }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        postLoginStatus: state.loginPageReducers.postLoginStatus.data
    };
}

export default withRouter(connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(Routes));

// export default connect(
//     mapStateToProps,
//     {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
//         // Name of imported action.
//     }
// )(Routes);
