import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from './types';
import * as userFetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';
export function fetchPostsRequest() {
    return {
        type: FETCH_POST_REQUEST
    }
}

export function fetchPostsSuccess(payload) {
    return {
        type: FETCH_POST_SUCCESS,
        payload
    }
}

export function fetchPostsError() {
    return {
        type: FETCH_POST_ERROR
    }
}

export function fetchPosts(page) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/get?page=${page}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchPostsError)
                        reject()
                    } else {
                        dispatch(fetchPostsSuccess(json))
                        resolve()
                    }
                }).catch(() =>  {
                    dispatch(fetchPostsError)
                    reject()
                });
            }).catch(() =>  {
                dispatch(fetchPostsError)
                reject()
            });
        })
        
    }
}