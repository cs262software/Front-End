// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function getPlayStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.GET_PLAY_REQUEST:
            return requestState(state);

        case reduxActions.GET_PLAY_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_PLAY_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getActStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.GET_ACT_REQUEST:
            return requestState(state);

        case reduxActions.GET_ACT_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_ACT_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getSceneStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.GET_SCENE_REQUEST:
            return requestState(state);

        case reduxActions.GET_SCENE_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_SCENE_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

export function getLineStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.GET_LINE_REQUEST:
            return requestState(state);

        case reduxActions.GET_LINE_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_LINE_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}
const scriptPageReducers = combineReducers({
    getPlayStatus,
    getActStatus,
    getSceneStatus,
    getLineStatus
});

export default scriptPageReducers;
