import {FETCH_ALL_HASHTAGS_REQUEST,FETCH_ALL_HASHTAGS_SUCCESS,FETCH_ALL_HASHTAGS_ERROR,
FETCH_POST_HASHTAGS_REQUEST,FETCH_POST_HASHTAGS_SUCCESS,FETCH_POST_HASHTAGS_ERROR} from './types'
import * as userFetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';

function fetchPostHashtagsRequest(){
    return{
        type: FETCH_POST_HASHTAGS_REQUEST
    }
}

function fetchPostHashtagsSuccess(payload){
    return{
        type: FETCH_POST_HASHTAGS_SUCCESS,
        payload
    }
}

function fetchPostHashtagsError(){
    return{
        type: FETCH_POST_HASHTAGS_ERROR
    }
}

export function fetchpostHashtags(postId){
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/hashtag/${postId}`;
            userFetch.get(url).then(res => {
                res.json().then(json => {
                    if (json === false || json.length === 0) {
                        dispatch(fetchPostHashtagsError)
                        reject()
                    } else {
                        dispatch(fetchPostHashtagsSuccess(json))
                        resolve()
                    }
                }).catch(() =>  {
                    dispatch(fetchPostHashtagsError)
                    reject()
                });
            }).catch(() =>  {
                dispatch(fetchPostHashtagsError)
                reject()
            });
        })
        
    }
}
