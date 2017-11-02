import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import HomePage from '../containers/homePage/homePage.container';
import LoginPage from '../containers/loginPage/loginPage.container';

class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={LoginPage}/>
        </Switch>
    );
  }
}

export default Routes;
