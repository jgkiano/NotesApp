import { AsyncStorage } from 'react-native';
import {
    SAVE_NOTE,
    CHANGE_TITLE_TEXT,
    CHANGE_CONTENT_TEXT,
    FETCH_NOTES,
    FETCH_USER
} from '../types';
import axios from 'axios';

const NOTES_ENDPOINT = 'http://localhost:3000/notes/';
const USER_NOTES_ENDPOINT = 'http://localhost:3000/notes/users/';

export const saveForm = (title, content, id = null) => async (dispatch) => {
    let userInfo = await AsyncStorage.getItem('user');
    userInfo = JSON.parse(userInfo);
    const user = userInfo._id;
    if (!id) {
        await axios.post(NOTES_ENDPOINT,{ title, content, user});
        const { data } = await axios.get(USER_NOTES_ENDPOINT + user);
        dispatch({ type: FETCH_NOTES, payload: data.notes });
        dispatch({ type: FETCH_USER, payload: userInfo.username });
    } else {
        await axios.put(NOTES_ENDPOINT + id ,{ title, content});
        const { data } = await axios.get(USER_NOTES_ENDPOINT + user);
        dispatch({ type: FETCH_NOTES, payload: data.notes });
        dispatch({ type: FETCH_USER, payload: userInfo.username });
    }
}

export const changeTitleText = (text) => {
    return {
        type: CHANGE_TITLE_TEXT,
        payload: text
    };
}

export const changeContentText = (text) => {
    return {
        type: CHANGE_CONTENT_TEXT,
        payload: text
    };
}
