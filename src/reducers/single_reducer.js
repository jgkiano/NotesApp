import {
    SINGLE_NOTE_SELECT
} from '../types';

const INITIAL_STATE = {}

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case SINGLE_NOTE_SELECT:
            return action.payload;
        default:
            return INITIAL_STATE;
    }
}
