import {
    NEW_USER,
    FETCH_USER,
    REGISTER_SUCCESSFUL
} from '../types';

const INITIAL_STATE = {
    username: null
}

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case NEW_USER:
            return INITIAL_STATE;
        case FETCH_USER:
            return { username: action.payload };
        case REGISTER_SUCCESSFUL:
            return { username: action.payload };
        default:
            return INITIAL_STATE;
    }
}
