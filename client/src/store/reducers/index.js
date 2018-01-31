import {combineReducers} from 'redux';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({notePad: notesReducer});

export default rootReducer;