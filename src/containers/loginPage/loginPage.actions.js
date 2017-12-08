import reduxActions from '../../constants/reduxActions';

export function postNewUser(data) {
    return {
        type: reduxActions.POST_NEW_USER_REQUEST,
        data: data
    };
}

export function login(creds) {
    return {
        type: reduxActions.LOGIN_REQUEST,
        creds: creds
    };
}

export function logout() {
    return {
        type: reduxActions.LOGOUT
    };
}
