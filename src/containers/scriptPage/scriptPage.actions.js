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

export function getCharactersByScene(playID, actNum, sceneNum) {
    return {
        type: reduxActions.GET_CHARACTERS_BY_SCENE_REQUEST,
        PlayID: playID,
        ActNum: actNum,
        SceneNum: sceneNum
    };
}

export function getBlockingByLine(lineID) {
    return {
        type: reduxActions.GET_BLOCKING_BY_LINE_REQUEST,
        LineID: lineID
    };
}

export function getLightsByLine(lineID) {
    return {
        type: reduxActions.GET_LIGHTS_BY_LINE_REQUEST,
        LineID: lineID
    };
}

export function getSoundsByLine(lineID) {
    return {
        type: reduxActions.GET_SOUNDS_BY_LINE_REQUEST,
        LineID: lineID
    };
}

export function getPropsByLine(lineID) {
    return {
        type: reduxActions.GET_PROPS_BY_LINE_REQUEST,
        LineID: lineID
    };
}

export function putLightsByLine(editedLights) {
    return {
        type: reduxActions.PUT_LIGHTS_BY_LINE_REQUEST,
        LineID: editedLights.lineID,
        EditedLights: editedLights.Name
    };
}

export function putSoundsByLine(editedSounds) {
    return {
        type: reduxActions.PUT_SOUNDS_BY_LINE_REQUEST,
        LineID: editedSounds.lineID,
        EditedSounds: editedSounds.Name
    };
}

export function putPropsByLine(editedProps) {
    return {
        type: reduxActions.PUT_PROPS_BY_LINE_REQUEST,
        LineID: editedProps.lineID,
        EditedProps: editedProps.Name
    };
}

export function postLightsByLine(newLights) {
    return {
        type: reduxActions.POST_LIGHTS_BY_LINE_REQUEST,
        LineID: newLights.lineID,
        NewLights: newLights.Name
    };
}

export function postSoundsByLine(newSounds) {
    return {
        type: reduxActions.POST_SOUNDS_BY_LINE_REQUEST,
        LineID: newSounds.lineID,
        NewSounds: newSounds.Name
    };
}

export function postPropsByLine(lineID, newProps) {
    return {
        type: reduxActions.POST_PROPS_BY_LINE_REQUEST,
        LineID: newProps.lineID,
        NewProps: newProps.Name
    };
}