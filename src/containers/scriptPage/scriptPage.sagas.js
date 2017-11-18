import { Get, Post, Put, Delete } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* getPlaysFlow() {
	yield takeLatest(reduxActions.GET_PLAY_REQUEST, getPlays);
}

export function* getPlays(action) {
	const {res, err} = yield call(Get, endpoints.GET_PLAY, action.data);
	if (res) {
		yield put({ type: reduxActions.GET_PLAY_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_PLAY_FAILURE, error: err.json });
	}
}

export function* getActsFlow() {
	yield takeLatest(reduxActions.GET_ACT_REQUEST, getActs);
}

export function* getActs(action) {
	const {res, err} = yield call(Get, endpoints.GET_ACT, action.data);
	if (res) {
		yield put({ type: reduxActions.GET_ACT_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_ACT_FAILURE, error: err.json });
	}
}

export function* getScenesFlow() {
	yield takeLatest(reduxActions.GET_SCENE_REQUEST, getScenes);
}

export function* getScenes(action) {
	const {res, err} = yield call(Get, endpoints.GET_SCENE, action.data);
	if (res) {
		yield put({ type: reduxActions.GET_SCENE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_SCENE_FAILURE, error: err.json });
	}
}

export function* getLinesFlow() {
	yield takeLatest(reduxActions.GET_LINE_REQUEST, getLines);
}

export function* getLines(action) {
	const {res, err} = yield call(Get, endpoints.GET_LINE, action.data);
	if (res) {
		yield put({ type: reduxActions.GET_LINE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_LINE_FAILURE, error: err.json });
	}
}
