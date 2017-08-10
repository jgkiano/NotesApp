import {
    SINGLE_NOTE_SELECT,
    NEW_NOTE
} from '../types';

export const singleNoteSelect = (note) => {
    return {
        type: SINGLE_NOTE_SELECT,
        payload: note
    };
}

export const newNote = () => {
    return {
        type: NEW_NOTE
    };
}
