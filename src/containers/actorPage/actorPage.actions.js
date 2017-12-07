import reduxActions from '../../constants/reduxActions';

export function getCharactersByPlay(playID) {
    return {
        type: reduxActions.GET_CHARACTERS_BY_PLAY_REQUEST,
        PlayID: playID
    };
}

export function getLinesByPlayAndCharacter(playID, characterID) {
    return {
        type: reduxActions.GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST,
        PlayID: playID,
        CharacterID: characterID
    };
}
