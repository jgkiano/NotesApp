import {
    WELCOME_SCREEN,
    REGISTER_SUCCESSFUL,
    REGISTER_FAIL,
    FETCH_USER,
    NEW_USER,
    USER_INPUT,
    SINGLE_NOTE_SELECT,
    EDIT_NOTE,
    NEW_NOTE,
    FETCH_NOTES,
    CHANGE_TITLE_TEXT,
    CHANGE_CONTENT_TEXT
} from '../types';

const INITIAL_STATE = {
    screen: ""
};

export default function( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case WELCOME_SCREEN:
            return { screen: "welcome" };
        case USER_INPUT:
            return { screen: "welcome" };
        case REGISTER_FAIL:
            return { screen: "welcome" };
        case NEW_USER:
            return { screen: "welcome" };
        case REGISTER_SUCCESSFUL:
            return { screen: "list" };
        case FETCH_USER:
            return { screen: "list" };
        case FETCH_NOTES:
            return { screen: "list" };
        case SINGLE_NOTE_SELECT:
            return { screen: "single" };
        case EDIT_NOTE:
            return { screen: "form" };
        case NEW_NOTE:
            return { screen: "form" };
        case CHANGE_TITLE_TEXT:
            return { screen: "form" };
        case CHANGE_CONTENT_TEXT:
            return { screen: "form" };
        default:
            return INITIAL_STATE;
    }
}
