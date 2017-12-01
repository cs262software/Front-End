import reduxActions from '../../constants/reduxActions';

export function getAllPlays() {
    return {
        type: reduxActions.GET_ALL_PLAYS_REQUEST
    };
}

export function getActs(playID) {
    return {
        type: reduxActions.GET_ACTS_REQUEST,
        PlayID: playID
    };
}

export function getScenes(playID, actNum) {
    return {
        type: reduxActions.GET_SCENES_REQUEST,
        PlayID: playID,
        ActNum: actNum
    };
}

export function getLines(playID, actNum, sceneNum) {
    return {
        type: reduxActions.GET_LINES_REQUEST,
        PlayID: playID,
        ActNum: actNum,
        SceneNum: sceneNum
    };
}

export function getBlockingByLine(lineID) {
    return {
        type: reduxActions.GET_BLOCKING_BY_LINE_REQUEST,
        data: lineID
    };
}
