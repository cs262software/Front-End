// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.

import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState /*, objectState, arrayState*/ } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

function getInitialLoginState() {
    // Get the auth token string, or null.
    let fetched = false;
    let authToken = localStorage.getItem('X-Auth-Token');
    if (authToken != null) {
        fetched = true;
    }
    return {
        fetching: false,
        fetched: fetched,
        error: null,
        data: authToken
    };
}

export function postNewUserStatus(state = defaultState, action) {
    switch (action.type) {

        case reduxActions.POST_NEW_USER_REQUEST:
            return requestState(state);

        case reduxActions.POST_NEW_USER_SUCCESS:
            return successState(state, action);

        case reduxActions.POST_NEW_USER_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

// Set the default state to the JWT, if one is found in local storage.
export function loginStatus(state = getInitialLoginState(), action) {
    switch (action.type) {

        case reduxActions.LOGIN_REQUEST:
            return requestState(state);

        case reduxActions.LOGIN_SUCCESS:
            action.data = localStorage.getItem('X-Auth-Token');
            return successState(state, action);

        case reduxActions.LOGIN_FAILURE:
            return failureState(state, action);

        case reduxActions.LOGOUT:
            // If we have an auth token stored, remove it.
            if (localStorage.getItem('X-Auth-Token')) {
                localStorage.removeItem('X-Auth-Token');
            }
            return defaultState;

        default:
            return state;
    }
}

const loginPageReducers = combineReducers({
    postNewUserStatus,
    loginStatus
});

export default loginPageReducers;
