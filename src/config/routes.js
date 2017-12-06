import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router';
import LoginPage from '../containers/loginPage/loginPage.container';
import ScriptPage from '../containers/scriptPage/scriptPage.container';
import SchedulePage from '../containers/schedulePage/schedulePage.container';
import ManageFilesPage from '../containers/manageFilesPage/manageFiles.container';
import FourOhFourPage from '../containers/FourOhFourPage';

// Define the main component switch.
class Routes extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.location }</p>
                { (this.props.loginStatus)
                    ?   <Switch>
                            <Route exact path='/' component={ScriptPage}/>
                            <Route exact path='/schedule' component={SchedulePage}/>
                            <Route exact path='/director/manage-files' component={ManageFilesPage}/>
                            <Route component={FourOhFourPage}/>
                        </Switch>
                    :   <Route component={LoginPage}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        loginStatus: state.loginPageReducers.loginStatus.data
    };
}

export default withRouter(connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
    }
)(Routes));
