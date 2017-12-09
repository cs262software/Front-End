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

export function getLines(playID, actNum, sceneNum, characterID) {
    return {
        type: reduxActions.GET_LINES_REQUEST,
        PlayID: playID,
        ActNum: actNum,
        SceneNum: sceneNum,
        CharacterID: characterID
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

export function saveBlocking(lineID, blockingUpdateArray) {
    return {
        type: reduxActions.SAVE_BLOCKING_REQUEST,
        LineID: lineID,
        BlockingUpdateArray: blockingUpdateArray
    };
}

export function getDirectorsNoteByLine(lineID) {
    return {
        type: reduxActions.GET_DIRECTORS_NOTE_BY_LINE_REQUEST,
        LineID: lineID
    }
}

export function saveDirectorsNote(lineID, directorsNote) {
    return {
        type: reduxActions.SAVE_DIRECTORS_NOTE_REQUEST,
        LineID: lineID,
        DirectorsNote: directorsNote
    }
}

export function getCharactersByPlay(playID) {
    return {
        type: reduxActions.GET_CHARACTERS_BY_PLAY_REQUEST,
        PlayID: playID
    };
}

// export function getLinesByPlayAndCharacter(playID, characterID) {
//     return {
//         type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST,
//         PlayID: playID,
//         CharacterID: characterID
//     };
// }
