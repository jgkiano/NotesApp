import {
    USER_INPUT,
    REGISTER_FAIL
} from '../types';

const INITIAL_STATE = {
    usernameInput: "",
}

export default function( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case USER_INPUT:
            return { ...state, usernameInput: action.payload };
        case REGISTER_FAIL:
            return { ...state, error: true };
        default:
            return INITIAL_STATE;
    }
}
