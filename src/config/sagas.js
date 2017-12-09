// import { Get /*, Put, Post, Delete*/} from './api';
import { fork /*, call, put, takeLatest*/ } from 'redux-saga/effects';
// import reduxActions from '../constants/reduxActions';
// import endpoints from '../constants/endpoints';

// loginPage sagas...
import {
    postNewUserFlow,
    loginFlow,
} from '../containers/loginPage/loginPage.sagas';

// mainHeader sagas...
import {
} from '../containers/mainHeader/mainHeader.sagas';

// scriptPage sagas...
import {
    getAllPlaysFlow,
    getActsFlow,
    getScenesFlow,
    getLinesFlow,
    getCharactersBySceneFlow,
    getBlockingByLineFlow,
    saveBlockingFlow,
    getDirectorsNoteByLineFlow,
    saveDirectorsNoteFlow,
    getCharactersByPlayFlow
} from '../containers/scriptPage/scriptPage.sagas';

import {
  getCharactersFlow
} from '../containers/schedulePage/schedulePage.sagas';

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
        fork(getBlockingByLineFlow),
        fork(saveBlockingFlow),
        fork(getDirectorsNoteByLineFlow),
        fork(saveDirectorsNoteFlow),
        fork(getCharactersByPlayFlow),

        //schedulePage sagas...
        fork(getCharactersFlow),
        fork(getCharactersBySceneFlow)
    ];
}
