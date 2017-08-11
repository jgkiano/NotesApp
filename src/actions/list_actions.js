import {
    SINGLE_NOTE_SELECT,
    NEW_NOTE,
    FETCH_NOTES
} from '../types';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const USER_NOTES_ENDPOINT = 'http://192.168.43.24:3000/notes/users/';

export const fetchNotes = () => async (dispatch) => {
    const user = await AsyncStorage.getItem('user');
    const uid = JSON.parse(user)._id;
    try {
        console.log(uid);
        const { data, request } = await axios.post(USER_NOTES_ENDPOINT + uid);
        console.log(request)
        console.log(USER_NOTES_ENDPOINT + uid);
        console.log(data);
        dispatch({
            type: FETCH_NOTES,
            payload: data.notes
        });
    } catch (error) {
        console.log(error);
    }
}

export const singleNoteSelect = (note) => {
    return {
        type: SINGLE_NOTE_SELECT,
        payload: note
    };
}

export const newNote = () => {
    return {
        type: NEW_NOTE
    };
}
