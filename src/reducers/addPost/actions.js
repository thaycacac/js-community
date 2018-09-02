import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_ERROR } from './types'
import * as userFetch from '../../utils/fetch';
import { BACKEND_URL } from '../../config/constants';
import { browserHistory } from 'react-router';

export function addPostRequest(authorId, title, content, type, hashtag) {
    return {
        type: ADD_POST_REQUEST,
        authorId,
        title,
        content,
        hashtag
    }
}

export function addPostSuccess() {
    return {
        type: ADD_POST_SUCCESS
    }
}

export function addPostError() {
    return {
        type: ADD_POST_ERROR
    }
}

export function addPost(authorId, title, content, type, hashtag) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = `${BACKEND_URL}/post/add`;
            const body = JSON.stringify({ authorId, title, content, type, hashtag });
            
            userFetch.post(url, body)
                .then(json => {
                    // console.log('addPostJson', json);
                    if (json && json.rowsAffected && json.rowsAffected[0] > 0) {
                        
                        dispatch(addPostSuccess);
                        browserHistory.push(`/${type}`)
                        resolve()
                    } else {
                        dispatch(addPostError);
                        reject()
                    }

                })
        })
    }
}