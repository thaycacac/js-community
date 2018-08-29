import { LOGIN_SUCCESS, LOGIN_REQUEST } from './constants';

const initialState = {
    email = '',
    picture = '',
    name = ''
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state);
        case LOGIN_SUCCESS:
            return state;
        default:
            return state;
    }
}