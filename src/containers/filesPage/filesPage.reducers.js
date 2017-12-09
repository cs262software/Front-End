import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';
var fileDownload = require('js-file-download');

function download(file) {
    var file = new Blob([file], { type: "text/xml;charset=utf-8;" });
    fileDownload(file, "test.xml");

}

export function getAllFilesStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_ALL_FILES_REQUEST:
            return requestState(state);

        case reduxActions.GET_ALL_FILES_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_ALL_FILES_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getFileStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_FILE_REQUEST:
            return requestState(state);

        case reduxActions.GET_FILE_SUCCESS:
            action.data = action.data.content;
            download(action.data);
            return successState(state, action);

        case reduxActions.GET_FILE_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function postFileStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.POST_FILE_REQUEST:
            return requestState(state);

        case reduxActions.POST_FILE_SUCCESS:
            return successState(state, action);

        case reduxActions.POST_FILE_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

const filesPageReducers = combineReducers({
    getAllFilesStatus,
    getFileStatus,
    postFileStatus
});

export default filesPageReducers;
