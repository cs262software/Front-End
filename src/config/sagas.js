import { Get /*, Put, Post, Delete*/} from './api';
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../constants/reduxActions';
import endpoints from '../constants/endpoints';

// loginPage sagas...
import {
    postNewUserFlow,
    loginFlow,
} from '../containers/loginPage/loginPage.sagas';

// scriptPage sagas...
import {
    getAllPlaysFlow,
    getActsFlow,
    getScenesFlow,
    getLinesFlow,
    getCharactersBySceneFlow,
    getBlockingByLineFlow
} from '../containers/scriptPage/scriptPage.sagas';

// filesPage sagas...
import {
    getAllFilesFlow,
    getFileFlow
} from '../containers/filesPage/filesPage.sagas';

export default function* Sagas() {
    yield [
        // loginPage sagas...
        fork(postNewUserFlow),
        fork(loginFlow),

        // scriptPage sagas...
        fork(getAllPlaysFlow),
        fork(getActsFlow),
        fork(getScenesFlow),
        fork(getLinesFlow),
        fork(getCharactersBySceneFlow),
        fork(getBlockingByLineFlow),

        // filesPage sagas...
        fork(getAllFilesFlow),
        fork(getFileFlow)
    ];
}
