import { FETCH_RANK_BY_USERID_REQUEST, FETCH_RANK_BY_USERID_SUCCESS } from './constants';

const initialState = {
    rank: {}
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_RANK_BY_USERID_REQUEST:
            return state;
        case FETCH_RANK_BY_USERID_SUCCESS:
        // console.log('action payload',action.payload)
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}