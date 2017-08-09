import {
    USER_INPUT,
    REGISTER_SUCCESSFUL,
    REGISTER_FAIL
} from '../types';

export const changeText = (text) => {
    return {
        type: USER_INPUT,
        payload: text
    }
}

export const registerUser = (username) => {
    if(username !== "") {
        return {
            type: REGISTER_SUCCESSFUL,
            payload: username
        };
    }
    return {
        type: REGISTER_FAIL
    }
}
