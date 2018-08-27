import { LOGIN_SUCCESS } from './constants';

const initialState = {
    email = '',
    name = '',
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}