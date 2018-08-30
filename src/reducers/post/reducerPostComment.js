import { FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS } from './types';

const initialState = {
    comments:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_REQUEST:
            return state;
        case FETCH_COMMENT_SUCCESS:
        
        // console.log('init post', Object.assign({}, state, action.payload))
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

