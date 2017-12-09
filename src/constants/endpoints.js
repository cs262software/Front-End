var endpoints = {
    // LoginPage endpoints
    POST_NEW_USER: "/api/users/create",
    LOGIN: "/api/users/login",
    VALIDATE_USER: "/api/users/validate",

    // MainHeader endpoints.

    // ScriptPage endpoints.
    GET_ALL_PLAYS: "/api/plays",
    GET_ACTS: "/api/plays/", // append :PlayID/acts in the saga",
    GET_SCENES: "/api/plays/", // append :PlayID/:ActNum/scenes in the saga",
    GET_LINES: "/api/plays/", // append :PlayID/:ActNum/:SceneNum/lines in the saga"
    GET_CHARACTERS_BY_SCENE: "/api/characters/", // append :PlayID/:ActNum/:SceneNum in the saga"
    GET_BLOCKING_BY_LINE: "/api/blocking/", // append :LineID
    SAVE_BLOCKING: "/api/blocking/", // append :LineID
    GET_DIRECTORS_NOTE_BY_LINE: "/api/plays/directorsnote/", // append :lineID
    SAVE_DIRECTORS_NOTE: "/api/plays/directorsnote/", // append :lineID
    GET_CHARACTERS_BY_PLAY: "/api/characters/", // append :PlayID
    GET_LINE_IDS_BY_CHARACTER: "/api/plays/lidsbycharacter/" // append :PlayID/:ActNum/:SceneNum/:CharacterID

    //GET_LINES_BY_PLAY_AND_CHARACTER: "/api/plays/actors/" // append :PlayID/:CharacterID
};

export default endpoints;
