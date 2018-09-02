import {FETCH_POST_SUCCESS,FETCH_POST_REQUEST,FETCH_POST_ERROR, FETCH_MORE_POST_SUCCESS} from './types';

const initialState = {
    posts: [],
    page : 0,
    total_pages: 0,
    loading: false
  };

export default (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_SUCCESS:
            return Object.assign({}, state, action.payload);
        case FETCH_MORE_POST_SUCCESS:
            const payload = action.payload;
            console.log(payload.page);
            return {...state, ...payload, posts: [...state.posts, ...payload.posts] }   
        default:
            return state;
    }
}

