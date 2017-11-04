// Use the naming convension:
// "<HTTP-REQUEST-TYPE>_<INTENDED-OBJECT-TO-CRUD>_"
// followed by "REQUEST", "SUCCESS" or "FAILURE"

// A saga will be setup to listen for the "REQUEST"
// The saga will then trigger either a "SUCCESS" or "FAILURE" action.

var reduxActions = {
    // MainHeader actions...

    // LoginPage actions...
    POST_LOGIN_REQUEST: 'POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS: 'POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE: 'POST_LOGIN_FAILURE'

    // HomePage actions...
};

export default reduxActions;
