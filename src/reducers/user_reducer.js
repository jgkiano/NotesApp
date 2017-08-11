import {
    NEW_USER,
    FETCH_USER,
    REGISTER_SUCCESSFUL,
    FETCH_NOTES
} from '../types';

const INITIAL_STATE = {
    username: null,
    notesList: null
}

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case NEW_USER:
            return INITIAL_STATE;
        case FETCH_USER:
            return { ...state, username: action.payload };
        case REGISTER_SUCCESSFUL:
            return { ...state, username: action.payload };
        case FETCH_NOTES:
            return { ...state, notesList: action.payload };
        default:
            return INITIAL_STATE;
    }
}
