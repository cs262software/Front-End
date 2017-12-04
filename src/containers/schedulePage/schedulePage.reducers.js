// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function getAllPlaysStatus(state = defaultState, action) {
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

export function getActsStatus(state = defaultState, action) {
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

export function getScenesStatus(state = defaultState, action) {
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

export function getCharactersStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.GET_CHARACTERS_REQUEST:
            return requestState(state);

        case reduxActions.GET_CHARACTERS_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_CHARACTERS_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

const schedulePageReducers = combineReducers({
    getAllPlaysStatus,
    getActsStatus,
    getSceneStatus,
    getCharactersStatus,
});

export default schedulePageReducers;
