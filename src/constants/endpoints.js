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

    // FilesPage endpoints.
    GET_ALL_FILES: "/api/files/all/",
    GET_FILE: "/api/files/" // append :FileName
};

export default endpoints;
