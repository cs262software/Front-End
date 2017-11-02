// // REQUEST actions are intercepted by sagas before arriving here.
// // The saga then dispatches either a SUCCESS or FAILURE.
//
// // Consider using macros for the common returns below.
//
// import { combineReducers } from 'redux';
// import reduxActions from '../../constants/reduxActions';
// import { defaultState, objectState, arrayState } from '../../constants/initialStates';
// import { requestState, successState, failureState } from '../../constants/nextStates';
//
// export function example(state = arrayState, action) {
//     switch (action.type) {
//     case reduxActions.EXAMPLE_REQUEST:
//         return requestState(state);
//     case reduxActions.EXAMPLE_SUCCESS:
//         return successState(state, action);
//     case reduxActions.EXAMPLE_FAILURE:
//         return failureState(state, action);
//     default:
//         return state;
//     }
// }
//
// const mainHeaderReducers = combineReducers({
//     example
// });
//
// export default mainHeaderReducers;
