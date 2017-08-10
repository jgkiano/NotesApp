import {
    WELCOME_SCREEN,
    REGISTER_SUCCESSFUL,
    REGISTER_FAIL,
    FETCH_USER,
    NEW_USER,
    USER_INPUT,
    SINGLE_NOTE_SELECT
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
        case SINGLE_NOTE_SELECT:
            return { screen: "single" };
        default:
            return INITIAL_STATE;
    }
}
