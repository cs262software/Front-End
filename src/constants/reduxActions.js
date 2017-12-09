// Use the naming convension:
// "<HTTP-REQUEST-TYPE>_<INTENDED-OBJECT-TO-CRUD>_"
// followed by "REQUEST", "SUCCESS" or "FAILURE"

// A saga will be setup to listen for the "REQUEST"
// The saga will then trigger either a "SUCCESS" or "FAILURE" action.

var reduxActions = {
    // LoginPage actions...
    POST_NEW_USER_REQUEST: 'POST_NEW_USER_REQUEST',
    POST_NEW_USER_SUCCESS: 'POST_NEW_USER_SUCCESS',
    POST_NEW_USER_FAILURE: 'POST_NEW_USER_FAILURE',

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',

    LOGOUT: 'LOGOUT',

    VALIDATE_USER_REQUEST: 'VALIDATE_USER_REQUEST',
    VALIDATE_USER_SUCCESS: 'VALIDATE_USER_SUCCESS',
    VALIDATE_USER_FAILURE: 'VALIDATE_USER_SUCCESS',

    // MainHeader actions...

    // ScriptPage actions...
    GET_ALL_PLAYS_REQUEST: 'GET_ALL_PLAYS_REQUEST',
    GET_ALL_PLAYS_SUCCESS: 'GET_ALL_PLAYS_SUCCESS',
    GET_ALL_PLAYS_FAILURE: 'GET_ALL_PLAYS_FAILURE',

    GET_ACTS_REQUEST: 'GET_ACTS_REQUEST',
    GET_ACTS_SUCCESS: 'GET_ACTS_SUCCESS',
    GET_ACTS_FAILURE: 'GET_ACTS_FAILURE',

    GET_SCENES_REQUEST: 'GET_SCENES_REQUEST',
    GET_SCENES_SUCCESS: 'GET_SCENES_SUCCESS',
    GET_SCENES_FAILURE: 'GET_SCENES_FAILURE',

    GET_LINES_REQUEST: 'GET_LINES_REQUEST',
    GET_LINES_SUCCESS: 'GET_LINES_SUCCESS',
    GET_LINES_FAILURE: 'GET_LINES_FAILURE',

    GET_CHARACTERS_REQUEST: 'GET_CHARACTERS_REQUEST',
    GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
    GET_CHARACTERS_FAILURE: 'GET_CHARACTERS_FAILURE',
    GET_CHARACTERS_BY_SCENE_REQUEST: 'GET_CHARACTERS_BY_SCENE_REQUEST',
    GET_CHARACTERS_BY_SCENE_SUCCESS: 'GET_CHARACTERS_BY_SCENE_SUCCESS',
    GET_CHARACTERS_BY_SCENE_FAILURE: 'GET_CHARACTERS_BY_SCENE_FAILURE',

    GET_BLOCKING_BY_LINE_REQUEST: 'GET_BLOCKING_BY_LINE_REQUEST',
    GET_BLOCKING_BY_LINE_SUCCESS: 'GET_BLOCKING_BY_LINE_SUCCESS',
    GET_BLOCKING_BY_LINE_FAILURE: 'GET_BLOCKING_BY_LINE_FAILURE',
    //crew notes actions
    GET_LIGHTS_BY_LINE_REQUEST: 'GET_LIGHTS_BY_LINE_REQUEST',
    GET_LIGHTS_BY_LINE_SUCCESS: 'GET_LIGHTS_BY_LINE_SUCCESS',
    GET_LIGHTS_BY_LINE_FAILURE: 'GET_LIGHTS_BY_LINE_FAILURE',

    GET_SOUNDS_BY_LINE_REQUEST: 'GET_SOUNDS_BY_LINE_REQUEST',
    GET_SOUNDS_BY_LINE_SUCCESS: 'GET_SOUNDS_BY_LINE_SUCCESS',
    GET_SOUNDS_BY_LINE_FAILURE: 'GET_SOUNDS_BY_LINE_FAILURE',

    GET_PROPS_BY_LINE_REQUEST: 'GET_PROPS_BY_LINE_REQUEST',
    GET_PROPS_BY_LINE_SUCCESS: 'GET_PROPS_BY_LINE_SUCCESS',
    GET_PROPS_BY_LINE_FAILURE: 'GET_PROPS_BY_LINE_FAILURE',

    PUT_LIGHTS_BY_LINE_REQUEST: 'PUT_LIGHTS_BY_LINE_REQUEST',
    PUT_LIGHTS_BY_LINE_SUCCESS: 'PUT_LIGHTS_BY_LINE_SUCCESS',
    PUT_LIGHTS_BY_LINE_FAILURE: 'PUT_LIGHTS_BY_LINE_FAILURE',

    PUT_SOUNDS_BY_LINE_REQUEST: 'PUT_SOUNDS_BY_LINE_REQUEST',
    PUT_SOUNDS_BY_LINE_SUCCESS: 'PUT_SOUNDS_BY_LINE_SUCCESS',
    PUT_SOUNDS_BY_LINE_FAILURE: 'PUT_SOUNDS_BY_LINE_FAILURE',

    PUT_PROPS_BY_LINE_REQUEST: 'PUT_PROPS_BY_LINE_REQUEST',
    PUT_PROPS_BY_LINE_SUCCESS: 'PUT_PROPS_BY_LINE_SUCCESS',
    PUT_PROPS_BY_LINE_FAILURE: 'PUT_PROPS_BY_LINE_FAILURE',

    POST_LIGHTS_BY_LINE_REQUEST: 'POST_LIGHTS_BY_LINE_REQUEST',
    POST_LIGHTS_BY_LINE_SUCCESS: 'POST_LIGHTS_BY_LINE_SUCCESS',
    POST_LIGHTS_BY_LINE_FAILURE: 'POST_LIGHTS_BY_LINE_FAILURE',

    POST_SOUNDS_BY_LINE_REQUEST: 'POST_SOUNDS_BY_LINE_REQUEST',
    POST_SOUNDS_BY_LINE_SUCCESS: 'POST_SOUNDS_BY_LINE_SUCCESS',
    POST_SOUNDS_BY_LINE_FAILURE: 'POST_SOUNDS_BY_LINE_FAILURE',

    POST_PROPS_BY_LINE_REQUEST: 'POST_PROPS_BY_LINE_REQUEST',
    POST_PROPS_BY_LINE_SUCCESS: 'POST_PROPS_BY_LINE_SUCCESS',
    POST_PROPS_BY_LINE_FAILURE: 'POST_PROPS_BY_LINE_FAILURE',  

    

    SAVE_BLOCKING_REQUEST: 'SAVE_BLOCKING_REQUEST',
    SAVE_BLOCKING_SUCCESS: 'SAVE_BLOCKING_SUCCESS',
    SAVE_BLOCKING_FAILURE: 'SAVE_BLOCKING_FAILURE',

    GET_DIRECTORS_NOTE_BY_LINE_REQUEST: 'GET_DIRECTORS_NOTE_BY_LINE_REQUEST',
    GET_DIRECTORS_NOTE_BY_LINE_SUCCESS: 'GET_DIRECTORS_NOTE_BY_LINE_SUCCESS',
    GET_DIRECTORS_NOTE_BY_LINE_FAILURE: 'GET_DIRECTORS_NOTE_BY_LINE_FAILURE',

    SAVE_DIRECTORS_NOTE_REQUEST: 'SAVE_DIRECTORS_NOTE_REQUEST',
    SAVE_DIRECTORS_NOTE_SUCCESS: 'SAVE_DIRECTORS_NOTE_SUCCESS',
    SAVE_DIRECTORS_NOTE_FAILURE: 'SAVE_DIRECTORS_NOTE_FAILURE',

    // ActorPage actions...
    GET_CHARACTERS_BY_PLAY_REQUEST: 'GET_CHARACTERS_BY_PLAY_REQUEST',
    GET_CHARACTERS_BY_PLAY_SUCCESS: 'GET_CHARACTERS_BY_PLAY_SUCCESS',
    GET_CHARACTERS_BY_PLAY_FAILURE: 'GET_CHARACTERS_BY_PLAY_FAILURE',

    GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST: 'GET_LINES_BY_PLAY_AND_CHARACTER_REQUEST',
    GET_LINES_BY_PLAY_AND_CHARACTER_SUCCESS: 'GET_LINES_BY_PLAY_AND_CHARACTER_SUCCESS',
    GET_LINES_BY_PLAY_AND_CHARACTER_FAILURE: 'GET_LINES_BY_PLAY_AND_CHARACTER_FAILURE'

};

export default reduxActions;
