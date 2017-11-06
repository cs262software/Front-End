import { Get, Post, Put, Delete } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* postLoginFlow() {
	yield takeLatest(reduxActions.POST_LOGIN_REQUEST, postLogin);
}

export function* postLogin(action) {
	const {res, err} = yield call(Post, endpoints.POST_LOGIN, action.creds);
	if (res) {
		yield put ({ type: reduxActions.POST_LOGIN_SUCCESS, data: res.json });
	}
	else if (err) {
		console.log(err);
		yield put({ type: reduxActions.POST_LOGIN_FAILURE, error: err });
	}
}
