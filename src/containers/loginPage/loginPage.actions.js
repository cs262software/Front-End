import reduxActions from '../../constants/reduxActions';

export function postLogin(creds) {
    return {
        type: reduxActions.POST_LOGIN_REQUEST,
        creds: creds
    };
}

export function logout() {
    return {
        type: reduxActions.LOGOUT
    };
}
