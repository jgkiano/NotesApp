import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    USER_INPUT,
    REGISTER_SUCCESSFUL,
    REGISTER_FAIL
} from '../types';

const REGISTER_ENDPOINT = 'http://192.168.43.24:3000/notes/users';

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
            const { data } = await axios.post(REGISTER_ENDPOINT, { username });
            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: data.user.username
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
