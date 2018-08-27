import {FETCH_RANK_REQUEST,FETCH_RANK_SUCCESS,FETCH_RANK_ERROR} from './types'

const initialState = {
    ranks: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_RANK_REQUEST:
            return state;
        case FETCH_RANK_SUCCESS:
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}