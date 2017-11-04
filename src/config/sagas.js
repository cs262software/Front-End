import { Put, Get, Post, Delete } from './api';
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../constants/reduxActions';
import endpoints from '../constants/endpoints';

import {
    // mainHeaderFlow,
} from '../containers/mainHeader/mainHeader.sagas';

import {
    // loginPageFlow,
    postLoginFlow
} from '../containers/loginPage/loginPage.sagas';

import {
    // homePageFlow,
} from '../containers/homePage/homePage.sagas';

export default function* Sagas() {
    yield [
        // mainHeader sagas...
        //fork(mainHeaderFlow),

        // loginPage sagas...
        fork(postLoginFlow)

        // homePage sagas...

    ];
}
