import {
    FETCH_NOTES
} from '../types';
const INITIAL_STATE = {
    notesList: null
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return { ...state, notesList: action.payload };
        default:
            return state;
    }
}
