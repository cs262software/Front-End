import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import Reducers from './config/reducers'
import Routes from './config/routes';
import Sagas from './config/sagas';
import './config/styles/index.css';

import StateLoader from "./config/stateLoader";

// Initialize browser history object.
const history = createBrowserHistory();
// Initialize sagas.
let sagaMiddleware = createSagaMiddleware();
// Initialize the redux store.
let store = createStore(
    connectRouter(history)(Reducers),
    StateLoader.loadState(),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ),
    ),
);

// Whenever the store changes, save it to the local storage.
store.subscribe(() => {
    StateLoader.saveState(store.getState());
});

// Whenever the store changes, log it.
// store.subscribe(() => {
//     console.log(store.getState());
// });

// Run the available sagas.
sagaMiddleware.run(Sagas);

// React Render Root.
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
