import { ADD_LIKE_REQUEST,ADD_LIKE_SUCCESS } from './types';

const initialState = {
    postId:0,
    userId:0,
    content:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE_REQUEST:
            return state;
        case ADD_LIKE_SUCCESS:
            return state;
        default:
            return state;
    }
}

