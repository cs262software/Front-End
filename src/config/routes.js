import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import HomePage from '../containers/homePage/homePage.container';
import LoginPage from '../containers/loginPage/loginPage.container';
import ManageFilesPage from '../containers/manageFilesPage/manageFiles.container';
import SchedulePage from '../containers/schedulePage/schedulePage.container';

class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/director/manage-files' component={ManageFilesPage}/>
            <Route exact path='/schedule' component={SchedulePage}/>
        </Switch>
    );
  }
}

export default Routes;
