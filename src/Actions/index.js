import Types from './Types';
import streamsServerApi from '../Apis/streamsServerApi';
import createBrowserHistory from '../History';

export const SIGN_IN = (userId,userName) => {
    return {
        type : Types.SIGN_IN,
        userId : userId,
        userName : userName
    };
}; 

export const SIGN_OUT = () => {
    return {type : Types.SIGN_OUT};
};

export const CREATE_STREAM = (formValues) => {
    return async function(dispatch) {
        const response =  await streamsServerApi.post("/streams",formValues);
        dispatch({type:Types.CREATE_STREAM, payload:response.data});
        createBrowserHistory.push("/");
    };
};

export const GET_STREAM = (id) => {
    return async function(dispatch) {
        const response =  await streamsServerApi.get(`/streams/${id}`);
        dispatch({type:Types.GET_STREAM, payload:response.data})
    };
};

export const GET_STREAMS = () => {
    return async function(dispatch) {
        const response =  await streamsServerApi.get("/streams");
        dispatch({type:Types.GET_STREAMS, payload:response.data})
    };
};

export const EDIT_STREAM = (formValues, id) => {
    return async function(dispatch) {
        const response =  await streamsServerApi.patch(`/streams/${id}`,formValues);
        dispatch({type:Types.EDIT_STREAM, payload:response.data});
        createBrowserHistory.push("/");
    };
};

export const DELETE_STREAM = (id) => {
    return async function(dispatch) {
        await streamsServerApi.delete(`/streams/${id}`);
        dispatch({type:Types.DELETE_STREAM, payload:id});
        createBrowserHistory.push("/");
    };
};






