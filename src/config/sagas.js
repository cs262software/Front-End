import { fork } from 'redux-saga/effects';

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
    getBlockingByLineFlow,
    getLightsByLineFlow,
    getSoundsByLineFlow,
    getPropsByLineFlow,
    saveLightsByLineFlow,
    saveSoundsByLineFlow,
    savePropsByLineFlow,
    saveBlockingFlow,
    getDirectorsNoteByLineFlow,
    saveDirectorsNoteFlow,
    getCharactersByPlayFlow
} from '../containers/scriptPage/scriptPage.sagas';

// filesPage sagas...
import {
    getAllFilesFlow,
    getFileFlow,
    postFileFlow
} from '../containers/filesPage/filesPage.sagas';

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
        fork(getLightsByLineFlow),
        fork(getSoundsByLineFlow),
        fork(getPropsByLineFlow),
        fork(saveLightsByLineFlow),
        fork(saveSoundsByLineFlow),
        fork(savePropsByLineFlow),

        //schedulePage sagas...
        fork(getCharactersFlow),
        fork(getCharactersBySceneFlow),
      
        // filesPage sagas...
        fork(getAllFilesFlow),
        fork(getFileFlow),
        fork(postFileFlow)
    ];
}
