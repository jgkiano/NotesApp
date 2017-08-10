import { combineReducers } from 'redux';
import screen from './screens_reducer';
import notes from './notes_reducer';
import user from './user_reducer';
import welcome from './welcome_reducer';
import single from './single_reducer';

export default combineReducers({
    notes,
    screen,
    user,
    welcome,
    single
});
