import { Get, Post, Put, Delete } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* getLogin(action) {
	const {res, err} = yield call(Get, endpoints.GET_LOGIN, action.data);
	if (res) {
		yield put ({ type: reduxActions.GET_LOGIN_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_LOGIN_FAILURE, error: err});
	}
}

export function* getLoginFlow() {
	yield takeLatest(reduxActions.GET_LOGIN_REQUEST, getLogin);
}
