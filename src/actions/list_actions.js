import {
    SINGLE_NOTE_SELECT
} from '../types';

export const singleNoteSelect = (note) => {
    return {
        type: SINGLE_NOTE_SELECT,
        payload: note
    };
}
