import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_ERROR } from './types';

const initialState = {
    post:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTENT_REQUEST:
            return state;
        case FETCH_CONTENT_SUCCESS:
        
        // console.log('init post', Object.assign({}, state, action.payload))
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

