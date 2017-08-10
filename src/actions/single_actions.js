import {
    EDIT_NOTE
} from '../types';

export const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        payload: note
    };
};
