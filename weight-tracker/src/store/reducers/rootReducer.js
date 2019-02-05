import authReducer from './authReducer';
import recordReducer from './recordReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // premade reducer made for syncing firestore data with our state in the background

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer,
    firestore: firestoreReducer // responsible for syncing our data
});

export default rootReducer;