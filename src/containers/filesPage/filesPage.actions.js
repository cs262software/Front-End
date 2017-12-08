import reduxActions from '../../constants/reduxActions';

export function getAllFiles() {
    return {
        type: reduxActions.GET_ALL_FILES_REQUEST
    };
}

export function getFile(fileName) {
    return {
        type: reduxActions.GET_FILE_REQUEST,
        fileName: fileName
    };
}
