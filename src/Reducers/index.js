import {combineReducers} from 'redux';
import authCond from './authCond';
import streamsReducer from './streamsReducer';
import { reducer as formReducer } from 'redux-form';





export default combineReducers({
    auth : authCond,
    streams :streamsReducer,
    form : formReducer
    
});

