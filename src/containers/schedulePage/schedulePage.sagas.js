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

export function* getScheduleFlow() {
	yield takeLatest(reduxActions.GET_SCHEDULE_REQUEST, getSchedule);
}

export function* getSchedule(action) {
	console.log(endpoints.GET_SCHEDULE + action.PlayID);
	const {res, err} = yield call(Get, endpoints.GET_SCHEDULE + action.PlayID + "/schedule", {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_SCHEDULE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_SCHEDULE_FAILURE, error: err.json });
	}
}
