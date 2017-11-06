// import { Put, Get, Post, Delete } from './api';
import { fork /*, call, put, takeLatest */ } from 'redux-saga/effects';
// import reduxActions from '../constants/reduxActions';
// import endpoints from '../constants/endpoints';

// loginPage sagas...
import {
    postLoginFlow
} from '../containers/loginPage/loginPage.sagas';

// mainHeader sagas...
import {
} from '../containers/mainHeader/mainHeader.sagas';

// homePage sagas...
import {
} from '../containers/homePage/homePage.sagas';

export default function* Sagas() {
    yield [
        // loginPage sagas...
        fork(postLoginFlow),

        // mainHeader sagas...

        // homePage sagas...

    ];
}
