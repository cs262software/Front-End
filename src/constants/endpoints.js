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
	
    //SchedulePage endpoints.
    GET_ALL_PLAYS: "/api/schedule",
    GET_ACTS: "/api/schedule/", // append :PlayID/acts in the saga",
    GET_SCENES: "/api/schedule/", // append :PlayID/:ActNum/scenes in the saga",
    GET_CHARACTERS: "/api/schedule/", // append :PlayID/:ActNum/:SceneNum/characters in the saga"
    GET_CHARACTERS_BY_SCENE: "/api/characters/", // append :PlayID/:ActNum/:SceneNum in the saga"
    GET_BLOCKING_BY_LINE: "/api/blocking/", // append :LineID
    SAVE_BLOCKING: "/api/blocking/", // append :LineID

    // ActorPage endpoints.
    GET_CHARACTERS_BY_PLAY: "/api/characters/", // append :PlayID
    GET_LINES_BY_PLAY_AND_CHARACTER: "/api/plays/actors/" // append :PlayID/:CharacterID
};

export default endpoints;
