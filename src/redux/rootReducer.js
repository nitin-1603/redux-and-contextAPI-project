import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './count/counterSlice';
import userReducer from './userslice/userslice';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;