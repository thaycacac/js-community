import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS ,
    FETCH_LOGIN_ERROR, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_REQUEST } from './constants';
import * as userfetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';
import { browserHistory } from 'react-router';

export function loginRequest() {
    return {
        type : LOGIN_REQUEST,
    } 
}

export function loginError() {
    return {
        type : LOGIN_ERROR,
    }
}

export function loginSuccess() {
    return {
        type : LOGIN_SUCCESS,
    }
}

export function login(email, picture, name) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const URL = `${BACKEND_URL}/signin`;
            const body = JSON.stringify({email, picture, name});
            userfetch.post(URL, body)
            .then(json => {
                if (json) {
                    console.log('json ---- ', json);
                    dispatch(loginSuccess);
                    browserHistory.push("/home");
                    resolve();
                } else {
                    dispatch(loginError);
                    reject();
                }
            
            }).catch(err => console.log(err))
        })
    }
}


export function fetchLoginSuccess(payload) {
    return {
        type : FETCH_LOGIN_SUCCESS,
        payload
    }
}

export function fetchLoginError() {
    return {
        type : FETCH_LOGIN_ERROR
    }
}

export function fetchLoginRequest() {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export function fetchLogin(){
    return(dispatch =>{
        return new Promise((resolve,reject) => {
            const url =`${BACKEND_URL}/signin`
            userfetch.get(url).then( res => {
                res.json().then(json =>{
                    if(json === false || json.length===0){
                        dispatch(fetchLoginError)
                        reject()
                    } else {
                        dispatch(fetchLoginSuccess(json))
                        resolve()
                    }
                }).catch(() => {
                    dispatch(fetchLoginError)
                    reject()
                }).catch(() => {
                    dispatch(fetchLoginError)
                    reject()
                })
            })
        })
    })
}