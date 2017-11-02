export function requestState(state) {
    return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
    }
}

export function successState(state, action) {
    return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        data: action.data
    }
}

export function failureState(state, action) {
    return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.error
    }
}
