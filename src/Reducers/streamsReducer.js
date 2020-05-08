import _ from 'lodash';
import Types from '../Actions/Types';


const streams = (state={},action) => {
    if(action.type === Types.EDIT_STREAM) {
        return {...state, [action.payload.id]:action.payload};
    }
    else if(action.type === Types.CREATE_STREAM) {
        return {...state, [action.payload.id]:action.payload};
    } 
    else if(action.type === Types.GET_STREAM) {
        return {...state, [action.payload.id]:action.payload};
    } 
    else if(action.type === Types.GET_STREAMS) {
        return {...state, ..._.mapKeys(action.payload,"id")};
    } 
    else if(action.type === Types.DELETE_STREAM) {
        return _.omit(state, action.payload)
    } 
    else {
        return state;
    }

};

export default streams;