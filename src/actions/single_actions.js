import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
    EDIT_NOTE,
    FETCH_NOTES,
    FETCH_USER
} from '../types';

const NOTES_ENDPOINT = 'http://192.168.43.24:3000/notes/';
const USER_NOTES_ENDPOINT = 'http://192.168.43.24:3000/notes/users/';

export const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        payload: note
    };
};

export const deleteNote = (id) => async (dispatch) => {
    await axios.delete( NOTES_ENDPOINT + id );
    let userInfo = await AsyncStorage.getItem('user');
    userInfo = JSON.parse(userInfo);
    const user = userInfo._id;
    const { data } = await axios.post(USER_NOTES_ENDPOINT + user);
    dispatch({ type: FETCH_NOTES, payload: data.notes });
    dispatch({ type: FETCH_USER, payload: userInfo.username });
}
