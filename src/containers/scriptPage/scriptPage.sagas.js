import { Get, Post /*, Put, Delete*/ } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* getAllPlaysFlow() {
	yield takeLatest(reduxActions.GET_ALL_PLAYS_REQUEST, getAllPlays);
}

export function* getAllPlays(action) {
	const {res, err} = yield call(Get, endpoints.GET_ALL_PLAYS, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_ALL_PLAYS_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_ALL_PLAYS_FAILURE, error: err.json });
	}
}

export function* getActsFlow() {
	yield takeLatest(reduxActions.GET_ACTS_REQUEST, getActs);
}

export function* getActs(action) {
	const {res, err} = yield call(Get, endpoints.GET_ACTS + action.PlayID + "/acts", {body: undefined});
	if (res) {
		let data = res.json;
		if (!Array.isArray(data)) {
			data = [];
		}
		yield put({ type: reduxActions.GET_ACTS_SUCCESS, data: data });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_ACTS_FAILURE, error: err.json });
	}
}

export function* getScenesFlow() {
	yield takeLatest(reduxActions.GET_SCENES_REQUEST, getScenes);
}

export function* getScenes(action) {
	const {res, err} = yield call(Get, endpoints.GET_SCENES + action.PlayID + "/" + action.ActNum + "/scenes", {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_SCENES_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_SCENES_FAILURE, error: err.json });
	}
}

export function* getLinesFlow() {
	yield takeLatest(reduxActions.GET_LINES_REQUEST, getLines);
}

export function* getLines(action) {
	let endpoint = endpoints.GET_LINES + action.PlayID + "/" + action.ActNum + "/" + action.SceneNum + "/lines";
	if (action.CharacterID != null) {
		endpoint = endpoint + "?CharacterID=" + action.CharacterID
	}
	const {res, err} = yield call(Get, endpoint, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_LINES_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_LINES_FAILURE, error: err.json });
	}
}

export function* getCharactersBySceneFlow() {
	yield takeLatest(reduxActions.GET_CHARACTERS_BY_SCENE_REQUEST, getCharactersByScene);
}

export function* getCharactersByScene(action) {
	const {res, err} = yield call(Get, endpoints.GET_CHARACTERS_BY_SCENE + action.PlayID + "/" + action.ActNum + "/" + action.SceneNum, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_CHARACTERS_BY_SCENE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_CHARACTERS_BY_SCENE_FAILURE, error: err.json });
	}
}

export function* getBlockingByLineFlow() {
	yield takeLatest(reduxActions.GET_BLOCKING_BY_LINE_REQUEST, getBlockingByLine);
}

export function* getBlockingByLine(action) {
	const {res, err} = yield call(Get, endpoints.GET_BLOCKING_BY_LINE + action.LineID, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_BLOCKING_BY_LINE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_BLOCKING_BY_LINE_FAILURE, error: err.json });
	}
}

export function* saveBlockingFlow() {
	yield takeLatest(reduxActions.SAVE_BLOCKING_REQUEST, saveBlocking);
}

export function* saveBlocking(action) {
	const {res, err} = yield call(Post, endpoints.SAVE_BLOCKING + action.LineID, { blockingUpdateArray: action.BlockingUpdateArray });
	if (res) {
		yield put({ type: reduxActions.SAVE_BLOCKING_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.SAVE_BLOCKING_FAILURE, error: err.json });
	}
}

export function* getDirectorsNoteByLineFlow() {
	yield takeLatest(reduxActions.GET_DIRECTORS_NOTE_BY_LINE_REQUEST, getDirectorsNoteByLine);
}

export function* getDirectorsNoteByLine(action) {
	const {res, err} = yield call(Get, endpoints.GET_DIRECTORS_NOTE_BY_LINE + action.LineID, { body: undefined });
	if (res) {
		yield put({ type: reduxActions.GET_DIRECTORS_NOTE_BY_LINE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_DIRECTORS_NOTE_BY_LINE_FAILURE, error: err.json });
	}
}

export function* saveDirectorsNoteFlow() {
	yield takeLatest(reduxActions.SAVE_DIRECTORS_NOTE_REQUEST, saveDirectorsNote);
}

export function* saveDirectorsNote(action) {
	const {res, err} = yield call(Post, endpoints.SAVE_DIRECTORS_NOTE + action.LineID, { directorsNote: action.DirectorsNote });
	if (res) {
		// console.log(res.json);
		yield put({ type: reduxActions.SAVE_DIRECTORS_NOTE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.SAVE_DIRECTORS_NOTE_FAILURE, error: err.json });
	}
}

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

// export function* getLinesByPlayAndCharacterFlow() {
//     yield takeLatest(reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST, getLinesByPlayAndCharacter);
// }
// export function* getLinesByPlayAndCharacter(action) {
//     const {res, err} = yield call(Get, endpoints.GET_LINES_BY_PLAY_AND_CHARACTER + action.PlayID + "/" + action.CharacterID, {body: undefined});
//     if (res) {
//         yield put({ type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_SUCCESS, data: res.json });
//     }
//     else if (err) {
//         yield put({ type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_FAILURE, error: err.json });
//     }
// }
