import { FETCH_LIKE_REQUEST, FETCH_LIKE_SUCCESS } from './types';

const initialState = {
    likes:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIKE_REQUEST:
            return state;
        case FETCH_LIKE_SUCCESS:
        
        // console.log('init post', Object.assign({}, state, action.payload))
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

