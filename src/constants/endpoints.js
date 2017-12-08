var endpoints = {
    // LoginPage endpoints
    POST_LOGIN: "/api/login",
    POST_NEW_USER: "/api/login/create",

    // MainHeader endpoints.

    // ScriptPage endpoints.
    GET_ALL_PLAYS: "/api/plays",
    GET_ACTS: "/api/plays/", // append :PlayID/acts in the saga",
    GET_SCENES: "/api/plays/", // append :PlayID/:ActNum/scenes in the saga",
    GET_LINES: "/api/plays/", // append :PlayID/:ActNum/:SceneNum/lines in the saga"

    //SchedulePage endpoints.
    GET_ALL_PLAYS: "/api/schedule",
    GET_ACTS: "/api/schedule/", // append :PlayID/acts in the saga",
    GET_SCENES: "/api/schedule/", // append :PlayID/:ActNum/scenes in the saga",
    GET_CHARACTERS: "/api/schedule/" // append :PlayID/:ActNum/:SceneNum/lines in the saga"
};

export default endpoints;
