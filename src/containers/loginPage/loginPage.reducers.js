// REQUEST actions are intercepted by sagas before arriving here.
// The saga then dispatches either a SUCCESS or FAILURE.
// Consider using macros for the common returns below.
import { combineReducers } from 'redux';
import reduxActions from '../../constants/reduxActions';
import { defaultState, objectState, arrayState } from '../../constants/initialStates';
import { requestState, successState, failureState } from '../../constants/nextStates';

export function getLoginStatus(state = arrayState, action) {
    switch (action.type) {
        case reduxActions.GET_LOGIN_REQUEST:
            return requestState(state);

        case reduxActions.GET_LOGIN_SUCCESS:
            return successState(state, action);

        case reduxActions.GET_LOGIN_FAILURE:
            return failureState(state, action);

        default:
            return state;
    }
}

const loginPageReducers = combineReducers({
    getLoginStatus
});

export default loginPageReducers;
