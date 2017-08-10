import {
    EDIT_NOTE,
    NEW_NOTE
} from '../types';

const INITIAL_STATE = {
    mode:"new",
    title: "",
    content: ""
};

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case EDIT_NOTE:
            return { mode: "edit", title: action.payload.title, content: action.payload.content };
        case NEW_NOTE:
            return INITIAL_STATE;
        default:
            return INITIAL_STATE;
    }
}
