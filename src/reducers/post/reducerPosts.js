
import {FETCH_POST_SUCCESS, FETCH_MORE_POST_SUCCESS, FETCH_LIKE_HISTORY_SUCCESS} from './types';

const initialState = {
    posts: [],
    page : 0,
    total_pages: 0,
    loading: false,
    liked : []
  };

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, action.payload);
        case FETCH_MORE_POST_SUCCESS:
            const payload = action.payload;
            return {...state, ...payload, posts: [...state.posts, ...payload.posts] }  
        case FETCH_LIKE_HISTORY_SUCCESS:
            return {...state, liked: action.payload}  
        default:
            return state;
    }
}

