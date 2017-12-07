import { Get /*, Post, Put, Delete*/ } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* getCharactersByPlayFlow() {
    yield takeLatest(reduxActions.GET_CHARACTERS_BY_PLAY_REQUEST, getCharactersByPlay);
}
export function* getCharactersByPlay(action) {
    const {res, err} = yield call(Get, endpoints.GET_CHARACTERS_BY_PLAY + action.PlayID, {body: undefined});
    if (res) {
        yield put({ type: reduxActions.GET_CHARACTERS_BY_PLAY_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.GET_CHARACTERS_BY_PLAY_FAILURE, error: err.json });
    }
}

export function* getLinesByPlayAndCharacterFlow() {
    yield takeLatest(reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST, getLinesByPlayAndCharacter);
}
export function* getLinesByPlayAndCharacter(action) {
    const {res, err} = yield call(Get, endpoints.GET_LINES_BY_PLAY_AND_CHARACTER + action.PlayID + "/" + action.CharacterID, {body: undefined});
    if (res) {
        yield put({ type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_FAILURE, error: err.json });
    }
}
