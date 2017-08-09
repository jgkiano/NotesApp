import {
    NEW_USER
} from '../types';

const INITIAL_STATE = {
    user: null
}

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case NEW_USER:
            return INITIAL_STATE;
        default:
            return INITIAL_STATE;
    }
}
