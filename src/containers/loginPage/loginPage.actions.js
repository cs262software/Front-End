import reduxActions from '../../constants/reduxActions';

export function getLogin(data) {
    return {
        type: reduxActions.GET_LOGIN_REQUEST,
        data
    }
}
