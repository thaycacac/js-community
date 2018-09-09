import * as userFetch from './../../utils/fetch'
import { BACKEND_URL } from './../../config/constants';

import { FETCH_POST_BY_USERID_ERROR, FETCH_POST_BY_USERID_REQUEST, FETCH_POST_BY_USERID_SUCCESS,
            FETCH_RANK_BY_USERID_ERROR, FETCH_RANK_BY_USERID_REQUEST, FETCH_RANK_BY_USERID_SUCCESS } from './constants';

export function fetchRankSuccess(payload) {
    return {
        type: FETCH_RANK_BY_USERID_SUCCESS,
        payload
    }
}

export function fetchRankRequest() {
    return {
        type: FETCH_RANK_BY_USERID_REQUEST
    }
}

export function fetchRankError() {
    return {
        type: FETCH_RANK_BY_USERID_ERROR
    }
}

export function fetchPostSuccess(payload) {
    return {
        type: FETCH_POST_BY_USERID_SUCCESS,
        payload
    }
}

export function fetchPostRequest() {
    return {
        type: FETCH_POST_BY_USERID_REQUEST
    }
}

export function fetchPostError() {
    return {
        type: FETCH_POST_BY_USERID_ERROR
    }
}

export function fetchRank(uid) {
    return(dispatch =>{
        return new Promise((resolve,reject) => {
            const url =`${BACKEND_URL}/rank/get/${uid}`
            userFetch.get(url).then( res => {
                res.json().then(json =>{
                    if(json === false || json.length===0){
                        dispatch(fetchRankError)
                        reject()
                    } else {
                        // console.log('json',json)
                        dispatch(fetchRankSuccess(json))
                        resolve()
                    }
                }).catch(() => {
                    dispatch(fetchRankError)
                    reject()
                }).catch(() => {
                    dispatch(fetchRankError)
                    reject()
                })
            })
        })
    })
}

export function fetchPost(uid, page) {
    return(dispatch =>{
        return new Promise((resolve,reject) => {
            const url =`${BACKEND_URL}/post/user/${uid}?page=${page}`
            userFetch.get(url).then( res => {
                res.json().then(json =>{
                    if(json === false || json.length===0){
                        dispatch(fetchPostError)
                        reject()
                    } else {
                        // console.log('json',json)
                        dispatch(fetchPostSuccess(json))
                        resolve()
                    }
                }).catch(() => {
                    dispatch(fetchPostError)
                    reject()
                }).catch(() => {
                    dispatch(fetchPostError)
                    reject()
                })
            })
        })
    })
}