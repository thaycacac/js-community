import {FETCH_POST_SUCCESS,FETCH_POST_REQUEST} from './types';

const initialState = {
    posts: [],
    page : 0,
    total_pages: 0,
    loading: false
  };

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return state;
        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

