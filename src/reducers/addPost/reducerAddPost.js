import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR } from './types'
import { addPostError, addPostRequest } from './actions';
const initialState = {
    body: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return Object.assign({}, state, action.payload);
        case ADD_POST_SUCCESS:
            return state;
        default:
            return state;
    }
}

