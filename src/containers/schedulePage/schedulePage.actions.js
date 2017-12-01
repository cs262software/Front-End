import reduxActions from '../../constants/reduxActions';

export function getAllPlays() {
    return {
        type: reduxActions.GET_ALL_PLAYS_REQUEST
    };
}

export function getSchedule(playID) {
    return {
        type: reduxActions.GET_SCHEDULE_REQUEST,
        PlayID: playID
    };
}
