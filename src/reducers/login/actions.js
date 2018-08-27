import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';

export function loginRequest() {
    return action = {
        type = LOGIN_REQUEST,
    } 
}

export function loginError() {
    return action = {
        type = LOGIN_ERROR,
    }
}

export function loginSuccess(payload) {
    return action = {
        type = LOGIN_SUCCESS,
        payload
    }
}

export function login(email) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            if (response.email === '' || response.email === null) {
                dispatch(loginError);
                reject();
            } else {
                dispatch(loginSuccess());
                resolve();
            }
        })
    }
}