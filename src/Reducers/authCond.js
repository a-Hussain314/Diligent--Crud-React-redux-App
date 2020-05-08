import Types from '../Actions/Types';

const init_state = {
    userName : null,
    authCondL : null,
    userId : null
};

 const authCond = (state=init_state,action) => {
    if(action.type === Types.SIGN_IN) {
        return {
            userName : action.userName,
            authCond : true,
            userId : action.userId
            
        };
    }
    else if(action.type === Types.SIGN_OUT) {
        return {
            userName : null,
            authCond : false,
            userId : null
            
        };
    };
    return state
}

export default authCond;