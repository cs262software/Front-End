import { Get, Post, Put /*, Delete*/ } from '../../config/api';
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
    const { res, err } = yield call(Post, endpoints.SAVE_BLOCKING + action.LineID, { blockingUpdateArray: action.BlockingUpdateArray });
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
    const { res, err } = yield call(Get, endpoints.GET_DIRECTORS_NOTE_BY_LINE + action.LineID, { body: undefined });
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
    const { res, err } = yield call(Post, endpoints.SAVE_DIRECTORS_NOTE + action.LineID, { directorsNote: action.DirectorsNote });
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


export function* getLightsByLineFlow() {
    yield takeLatest(reduxActions.GET_LIGHTS_BY_LINE_REQUEST, getLightsByLine);
}

export function* getLightsByLine(action) {
    const { res, err } = yield call(Get, endpoints.GET_LIGHTS_BY_LINE + action.LineID, { body: undefined });
    if (res) {
        yield put({ type: reduxActions.GET_LIGHTS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.GET_LIGHTS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* getSoundsByLineFlow() {
    yield takeLatest(reduxActions.GET_SOUNDS_BY_LINE_REQUEST, getSoundsByLine);
}

export function* getSoundsByLine(action) {
    const { res, err } = yield call(Get, endpoints.GET_SOUNDS_BY_LINE + action.LineID, { body: undefined });
    if (res) {
        yield put({ type: reduxActions.GET_SOUNDS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.GET_SOUNDS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* getPropsByLineFlow() {
    yield takeLatest(reduxActions.GET_PROPS_BY_LINE_REQUEST, getPropsByLine);
}

export function* getPropsByLine(action) {
    const { res, err } = yield call(Get, endpoints.GET_PROPS_BY_LINE + action.LineID, { body: undefined });
    if (res) {
        yield put({ type: reduxActions.GET_PROPS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.GET_PROPS_BY_LINE_FAILURE, error: err.json });
    }
}

{/*
export function* putLightsByLineFlow() {
    yield takeLatest(reduxActions.PUT_LIGHTS_BY_LINE_REQUEST, putLightsByLine);
}

export function* putLightsByLine(action) {
    const { res, err } = yield call(Put, endpoints.PUT_LIGHTS_BY_LINE + action.EditedLights);
    if (res) {
        yield put({ type: reduxActions.PUT_LIGHTS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.PUT_LIGHTS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* putSoundsByLineFlow() {
    yield takeLatest(reduxActions.PUT_SOUNDS_BY_LINE_REQUEST, putSoundsByLine);
}

export function* putSoundsByLine(action) {
    const { res, err } = yield call(Put, endpoints.PUT_SOUNDS_BY_LINE + action.EditedSounds);
    if (res) {
        yield put({ type: reduxActions.PUT_SOUNDS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.PUT_SOUNDS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* putPropsByLineFlow() {
    yield takeLatest(reduxActions.PUT_PROPS_BY_LINE_REQUEST, putPropsByLine);
}

export function* putPropsByLine(action) {
    const { res, err } = yield call(Put, endpoints.PUT_PROPS_BY_LINE + action.EditedProps);
    if (res) {
        yield put({ type: reduxActions.PUT_PROPS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.PUT_PROPS_BY_LINE_FAILURE, error: err.json });
    }
}
*/}

export function* saveLightsByLineFlow() {
    yield takeLatest(reduxActions.SAVE_LIGHTS_BY_LINE_REQUEST, saveLightsByLine);
}

export function* saveLightsByLine(action) {
    const { res, err } = yield call(Post, endpoints.SAVE_LIGHTS_BY_LINE + action.LightID, { Name: action.Name });
    if (res) {
        yield put({ type: reduxActions.SAVE_LIGHTS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.SAVE_LIGHTS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* saveSoundsByLineFlow() {
    yield takeLatest(reduxActions.SAVE_SOUNDS_BY_LINE_REQUEST, saveSoundsByLine);
}

export function* saveSoundsByLine(action) {
    const { res, err } = yield call(Post, endpoints.SAVE_SOUNDS_BY_LINE + action.SoundID, {Name: action.Name });
    if (res) {
        yield put({ type: reduxActions.SAVE_SOUNDS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.SAVE_SOUNDS_BY_LINE_FAILURE, error: err.json });
    }
}

export function* savePropsByLineFlow() {
    yield takeLatest(reduxActions.SAVE_PROPS_BY_LINE_REQUEST, savePropsByLine);
}

export function* savePropsByLine(action) {
    const { res, err } = yield call(Post, endpoints.SAVE_PROPS_BY_LINE + action.PropID, { Name: action.Name });
    if (res) {
        yield put({ type: reduxActions.SAVE_PROPS_BY_LINE_SUCCESS, data: res.json });
    }
    else if (err) {
        yield put({ type: reduxActions.SAVE_PROPS_BY_LINE_FAILURE, error: err.json });
    }
}
