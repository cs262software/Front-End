import { Get, Post, Put, Delete } from '../../config/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import reduxActions from '../../constants/reduxActions';
import endpoints from '../../constants/endpoints';

// homePage sagas...

// export function* exampleFlow() {
//     yield takeLatest(reduxActions.EXAMPLE_REQUEST, example);
// }
// export function* example(action) {
//     const {res, err} = yield call(Post, endpoints.POST_EXAMPLE, action.data);
//     if(res) {
//         yield put({ type: reduxActions.EXAMPLE_SUCCESS, data: res.json });
//     }
//     else if(err) {
//         yield put({ type: reduxActions.EXAMPLE_FAILURE, error: err });
//     }
// }
