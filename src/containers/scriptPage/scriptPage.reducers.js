// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { /*defaultState, objectState,*/ arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function getAllPlaysStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_ALL_PLAYS_REQUEST:
            return requestState(state);

        case reduxActions.GET_ALL_PLAYS_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_ALL_PLAYS_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getActsStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_ACTS_REQUEST:
            return requestState(state);

        case reduxActions.GET_ACTS_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_ACTS_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getScenesStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_SCENES_REQUEST:
            return requestState(state);

        case reduxActions.GET_SCENES_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_SCENES_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getLinesStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_LINES_REQUEST:
            return requestState(state);

        case reduxActions.GET_LINES_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_LINES_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getBlockingByLineStatus(state = arrayState, action) {
    switch (action.type) {

        case reduxActions.GET_BLOCKING_BY_LINE_REQUEST:
            return requestState(state);

        case reduxActions.GET_BLOCKING_BY_LINE_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_BLOCKING_BY_LINE_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

const scriptPageReducers = combineReducers({
    getAllPlaysStatus,
    getActsStatus,
    getScenesStatus,
    getLinesStatus,
    getBlockingByLineStatus
});

export default scriptPageReducers;
