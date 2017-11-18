// import { Put, Get, Post, Delete } from './api';
import { fork /*, call, put, takeLatest */ } from 'redux-saga/effects';
// import reduxActions from '../constants/reduxActions';
// import endpoints from '../constants/endpoints';

// loginPage sagas...
import {
    postLoginFlow,
    postNewUserFlow
} from '../containers/loginPage/loginPage.sagas';

// mainHeader sagas...
import {
} from '../containers/mainHeader/mainHeader.sagas';

// homePage sagas...
import {
} from '../containers/homePage/homePage.sagas';

import {
  getAllPlaysFlow,
  getActsFlow,
  getScenesFlow,
  getLinesFlow
} from '../containers/scriptPage/scriptPage.sagas';

export default function* Sagas() {
    yield [
        // loginPage sagas...
        fork(postLoginFlow),
        fork(postNewUserFlow),

        // mainHeader sagas...

        // homePage sagas...
        fork(getAllPlaysFlow),
        fork(getActsFlow),
        fork(getScenesFlow),
        fork(getLinesFlow)

    ];
}
