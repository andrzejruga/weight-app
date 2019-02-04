import authReducer from './authReducer';
import recordReducer from './recordReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    record: recordReducer
});

export default rootReducer;