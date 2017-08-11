import {
    EDIT_NOTE,
    NEW_NOTE,
    CHANGE_TITLE_TEXT,
    CHANGE_CONTENT_TEXT
} from '../types';

const INITIAL_STATE = {
    mode:"new",
    title: "",
    content: "",
    id: null
};

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case EDIT_NOTE:
            return { mode: "edit", title: action.payload.title, content: action.payload.content, id: action.payload._id };
        case NEW_NOTE:
            return INITIAL_STATE;
        case CHANGE_TITLE_TEXT:
            return {...state, title: action.payload};
        case CHANGE_CONTENT_TEXT:
            return {...state, content: action.payload};
        default:
            return INITIAL_STATE;
    }
}
