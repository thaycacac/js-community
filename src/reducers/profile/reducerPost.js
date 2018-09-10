import { FETCH_POST_BY_USERID_REQUEST, FETCH_POST_BY_USERID_SUCCESS } from './constants';

const initialState = {
    post: []
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_POST_BY_USERID_REQUEST:
            return state;
        case FETCH_POST_BY_USERID_SUCCESS:
        // console.log('action payload',action.payload)
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}