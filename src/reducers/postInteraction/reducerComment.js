import { ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_ERROR } from './types';

const initialState = {
    postId:0,
    userId:0,
    content:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
            return state;
        case ADD_COMMENT_SUCCESS:
            return state;
        default:
            return state;
    }
}

