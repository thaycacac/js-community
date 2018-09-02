import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR,
FETCH_CONTENT_REQUEST,FETCH_CONTENT_SUCCESS,FETCH_CONTENT_ERROR,
FETCH_COMMENT_REQUEST,FETCH_COMMENT_SUCCESS,FETCH_COMMENT_ERROR,
FETCH_LIKE_REQUEST,FETCH_LIKE_SUCCESS,FETCH_LIKE_ERROR, FETCH_MORE_POST_SUCCESS } from './types';
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

export function fetchMorePostsSuccess(payload) {
    
    return {
        type: FETCH_MORE_POST_SUCCESS,
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
export function fetchMorePosts(page) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/get?page=${page}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchPostsError)
                        reject()
                    } else {
                        dispatch(fetchMorePostsSuccess(json))
                        
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

// fetch post content

export function fetchContentRequest(){
    return {
        type:FETCH_CONTENT_REQUEST
    }
}

export function fetchContentSuccess(payload){
    return{
        type:FETCH_CONTENT_SUCCESS,
        payload
    }
}

export function fetchContentError(){
    return {
        type:FETCH_CONTENT_ERROR
    }
}

export function fetchPostContent(postId){
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/post/${postId}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchContentError)
                        reject()
                    } else {
                        dispatch(fetchContentSuccess(json))
                        // console.log('json',json)
                        resolve()
                    }
                }).catch(() =>  {
                    dispatch(fetchContentError)
                    reject()
                });
            }).catch(() =>  {
                dispatch(fetchContentError)
                reject()
            });
        })
        
    }
}

// Post like

export function fetchPostLikeRequest() {
    return {
        type: FETCH_LIKE_REQUEST
    }
}

export function fetchPostLikeSuccess(payload) {
    
    return {
        type: FETCH_LIKE_SUCCESS,
        payload
    }
}

export function fetchPostLikeError() {
    return {
        type: FETCH_LIKE_ERROR
    }
}

export function fetchPostLike(postId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/like/${postId}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchPostLikeError)
                        reject()
                    } else {
                        dispatch(fetchPostLikeSuccess(json))
                        
                        resolve()
                    }
                }).catch(() =>  {
                    dispatch(fetchPostLikeError)
                    reject()
                });
            }).catch(() =>  {
                dispatch(fetchPostLikeError)
                reject()
            });
        })
        
    }
}

// post comment

export function fetchPostCommentRequest() {
    return {
        type: FETCH_COMMENT_REQUEST
    }
}

export function fetchPostCommentSuccess(payload) {
    
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload
    }
}

export function fetchPostCommentError() {
    return {
        type: FETCH_COMMENT_ERROR
    }
}

export function fetchPostComment(postId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/comment/${postId}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchPostCommentError)
                        reject()
                    } else {
                        dispatch(fetchPostCommentSuccess(json))
                        
                        resolve()
                    }
                }).catch(() =>  {
                    dispatch(fetchPostCommentError)
                    reject()
                });
            }).catch(() =>  {
                dispatch(fetchPostCommentError)
                reject()
            });
        })
        
    }
}