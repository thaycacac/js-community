import { LOGIN_SUCCESS, LOGIN_REQUEST } from './constants';

const initialState = {
    email : localStorage.getItem('email') || '',
    picture : localStorage.getItem('avatar') || '',
    name : localStorage.getItem('name') || '',
    description : localStorage.getItem('description') || ''
}

export default (state = initialState, action ) => {
    console.log(initialState);
    switch(action.type) {
        case LOGIN_SUCCESS:
            const payload = action.payload;
            return [...state, ...payload]
        default:
            return state;
    }
}