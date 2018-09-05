import {ADD_COMMENT_ERROR,ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_LIKE_REQUEST,ADD_LIKE_SUCCESS,ADD_LIKE_ERROR} from './types'
import * as userFetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';

function addLikeRequest(){
    return{
        type: ADD_LIKE_REQUEST
    }
}

function addLikeSuccess(){
    return{
        type: ADD_LIKE_SUCCESS
    }
}

function addLikeError(){
    return{
        type: ADD_LIKE_ERROR
    }
}

export function addLike(postId,userId){
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            const url = `${BACKEND_URL}/post/add/like`
            const body = JSON.stringify({ postId,userId });
            console.log(body);
            userFetch.post(url, body)
                .then(json => {
                    // console.log('addPostJson', json);
                    if (json && json.rowsAffected && json.rowsAffected[0] > 0) {
                        dispatch(addLikeSuccess);
                        resolve()
                    } else {
                        console.log(json);
                        dispatch(addLikeError);
                        reject()
                    }

                }).catch(err => console.log(err));
        })
    }
}

// comment

function addCommentRequest(){
    return{
        type: ADD_COMMENT_REQUEST
    }
}

function addCommentSuccess(){
    return{
        type: ADD_COMMENT_SUCCESS
    }
}

function addCommentError(){
    return{
        type: ADD_COMMENT_ERROR
    }
}

export function addComment(postId, userId, content){
    return (dispatch) => {
        return new Promise((resolve,reject) =>{
            const url = `${BACKEND_URL}/post/add/comment`
            const body = JSON.stringify({ postId,userId,content });
            console.log(body);
            userFetch.post(url, body)
                .then(json => {
                    // console.log('addPostJson', json);
                    if (json && json.rowsAffected && json.rowsAffected[0] > 0) {
                        dispatch(addCommentSuccess);
                        console.log('add comment success', postId,userId,content);
                        resolve()
                    } else {
                        console.log(json);
                        dispatch(addCommentError);
                        reject()
                    }

                }).catch(err => console.log(err));
        })
    }
}