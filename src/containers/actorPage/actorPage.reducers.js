// // REQUEST actions are intercepted by sagas before arriving here.
// // The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { /*defaultState, objectState,*/ arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function getCharactersByPlayStatus(state = arrayState, action) {
    switch (action.type) {
        case reduxActions.GET_CHARACTERS_BY_PLAY_REQUEST:
            return requestState(state);
        case reduxActions.GET_CHARACTERS_BY_PLAY_SUCCESS:
            return successState(state, action);
        case reduxActions.GET_CHARACTERS_BY_PLAY_FAILURE:
            return failureState(state, action);
        default:
            return state;
    }
}

export function getLinesByPlayAndCharacterStatus(state = arrayState, action) {
    switch (action.type) {
        case reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST:
            return requestState(state);
        case reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_SUCCESS:
            return successState(state, action);
        case reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_FAILURE:
            return failureState(state, action);
        default:
            return state;
    }
}

const actorPageReducers = combineReducers({
    getCharactersByPlayStatus,
    getLinesByPlayAndCharacterStatus
});

export default actorPageReducers;
