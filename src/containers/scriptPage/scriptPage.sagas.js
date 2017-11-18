import { Get, Post, Put, Delete } from '../../config/api';
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
	console.log(endpoints.GET_ACTS + action.PlayID);
	const {res, err} = yield call(Get, endpoints.GET_ACTS + action.PlayID + "/acts", {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_ACTS_SUCCESS, data: res.json });
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
	const {res, err} = yield call(Get, endpoints.GET_LINES + action.PlayID + "/" + action.ActNum + "/" + action.SceneNum + "/lines", {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_LINES_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_LINES_FAILURE, error: err.json });
	}
}
