import reduxActions from '../../constants/reduxActions';

export function postLogin(creds) {
    return {
        type: reduxActions.POST_LOGIN_REQUEST,
        creds: creds
    };
}

export function postNewUser(data) {
    return {
        type: reduxActions.POST_NEW_USER_REQUEST,
        data: data
    };
}

export function logout() {
    return {
        type: reduxActions.LOGOUT
    };
}
