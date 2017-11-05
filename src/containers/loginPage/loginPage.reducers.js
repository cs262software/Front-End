// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function postLoginStatus(state = defaultState, action) {
    switch (action.type) {
        case reduxActions.POST_LOGIN_REQUEST:
            return requestState(state);

        case reduxActions.POST_LOGIN_SUCCESS:
            return successState(state, action);

        case reduxActions.POST_LOGIN_FAILURE:
            return failureState(state, action);

        case reduxActions.LOGOUT:
            return defaultState;

        default:
            return state;
    }
}

const loginPageReducers = combineReducers({
    postLoginStatus
});

export default loginPageReducers;
