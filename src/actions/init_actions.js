import { AsyncStorage } from 'react-native';

import {
    FETCH_USER,
    NEW_USER
} from '../types';

export const getUser = () => async (dispatch) => {
    try {
        // await AsyncStorage.removeItem('user');
        const user = await AsyncStorage.getItem('user');
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
            return;
        }
        dispatch({
            type: NEW_USER
        });
    } catch (error) {
        console.log(error);
    }
}
