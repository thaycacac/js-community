import {FETCH_SUCCESS,FETCH_REQUEST,FETCH_ERROR} from './types';


export default (state ={},action) =>{
    let posts = null;
    switch(action.type){
        case FETCH_REQUEST:
            return state;
        case FETCH_SUCCESS:
        console.log('payload',action.payload);
            return posts={...state,posts:action.payload};
        default:
            return state;
    }
}

