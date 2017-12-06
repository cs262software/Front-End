import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { /*defaultState, objectState,*/ arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

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


const filesPageReducers = combineReducers({
    getAllFilesStatus
});

export default filesPageReducers;
