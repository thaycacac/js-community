import {FETCH_POST_HASHTAGS_REQUEST,FETCH_POST_HASHTAGS_SUCCESS} from './types'

const initialState = {
    hashtags:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_HASHTAGS_REQUEST:
            return state;
        case FETCH_POST_HASHTAGS_SUCCESS:
        
        // console.log('init post', Object.assign({}, state, action.payload))
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

