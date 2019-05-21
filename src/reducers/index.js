import { combineReducers } from 'redux';
import msgs from './msg';
import notices from './notice';

export default combineReducers({
    msgs,
    notices
})
