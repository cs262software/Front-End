import { Get /*, Post, Put, Delete*/ } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

export function* getAllFilesFlow() {
	yield takeLatest(reduxActions.GET_ALL_FILES_REQUEST, getAllFiles);
}

export function* getAllFiles(action) {
	const {res, err} = yield call(Get, endpoints.GET_ALL_FILES, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_ALL_FILES_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_ALL_FILES_FAILURE, error: err.json });
	}
}

export function* getFileFlow() {
	yield takeLatest(reduxActions.GET_FILE_REQUEST, getFile);
}

export function* getFile(action) {
	const {res, err} = yield call(Get, endpoints.GET_FILE + action.fileName, {body: undefined});
	if (res) {
		yield put({ type: reduxActions.GET_FILE_SUCCESS, data: res.json });
	}
	else if (err) {
		yield put({ type: reduxActions.GET_FILE_FAILURE, error: err.json });
	}
}
