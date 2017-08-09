import {
    WELCOME_SCREEN,
    REGISTER_SUCCESSFUL
} from '../types';

const INITIAL_STATE = {
    screen: "welcome"
};

export default function( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case WELCOME_SCREEN:
            return INITIAL_STATE;
        case REGISTER_SUCCESSFUL:
            return { screen: "list" };
        default:
            return INITIAL_STATE;
    }
}
