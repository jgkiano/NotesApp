import { AsyncStorage } from 'react-native';
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

export const registerUser = (username) => async (dispatch) => {
    console.log(username);
    if(username !== "") {
        try {
            await AsyncStorage.setItem("user", username);
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: username
            });
            return;
        } catch (error) {
            console.log(error);
            dispatch({
                type: REGISTER_FAIL
            });
            return;
        }
    }
    dispatch({
        type: REGISTER_FAIL
    });
}
