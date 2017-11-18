import reduxActions from '../../constants/reduxActions';

export function getPlays(data) {
    return {
        type: reduxActions.GET_PLAY_REQUEST,
        data: data
    };
}

export function getActs(data) {
    return {
        type: reduxActions.GET_ACT_REQUEST,
        data: data
    };
}

export function getScenes(data) {
    return {
        type: reduxActions.GET_SCENE_REQUEST,
        data: data
    };
}

export function getLines(data) {
    return {
        type: reduxActions.GET_LINE_REQUEST,
        data: data
    };
}
