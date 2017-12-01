// Use the naming convension:
// "<HTTP-REQUEST-TYPE>_<INTENDED-OBJECT-TO-CRUD>_"
// followed by "REQUEST", "SUCCESS" or "FAILURE"

// A saga will be setup to listen for the "REQUEST"
// The saga will then trigger either a "SUCCESS" or "FAILURE" action.

var reduxActions = {
    // LoginPage actions...
    POST_LOGIN_REQUEST: 'POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS: 'POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE: 'POST_LOGIN_FAILURE',

    POST_NEW_USER_REQUEST: 'POST_NEW_USER_REQUEST',
    POST_NEW_USER_SUCCESS: 'POST_NEW_USER_SUCCESS',
    POST_NEW_USER_FAILURE: 'POST_NEW_USER_FAILURE',

    LOGOUT: 'LOGOUT',

    // MainHeader actions...

    // HomePage actions...
    GET_ALL_PLAYS_REQUEST: 'GET_ALL_PLAYS_REQUEST',
    GET_ALL_PLAYS_SUCCESS: 'GET_ALL_PLAYS_SUCCESS',
    GET_ALL_PLAYS_FAILURE: 'GET_ALL_PLAYS_FAILURE'
};

export default reduxActions;
