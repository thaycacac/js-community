import {FETCH_RANK_REQUEST,FETCH_RANK_SUCCESS,FETCH_RANK_ERROR} from './types'
import * as userFetch from './../../utils/fetch'
import { BACKEND_URL } from './../../config/constants';

export function fetchRankRequest(){
    return {
        type: FETCH_RANK_REQUEST
    }
}

export function fetchRankSuccess(payload){
    return {
        type: FETCH_RANK_SUCCESS,
        payload
    }
}

export function fetchRankError(){
    return {
        type: FETCH_RANK_ERROR
    }
}

export function fetchRank(){
    return(dispatch =>{
        return new Promise((resolve,reject) => {
            const url =`${BACKEND_URL}/rank/get`
            userFetch.get(url).then( res => {
                res.json().then(json =>{
                    if(json === false || json.length===0){
                        dispatch(fetchRankError)
                        reject()
                    } else {
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

// return (dispatch) => {
//     return new Promise((resolve, reject) => {
//         const url = `${BACKEND_URL}/post/get?page=${page}`;
//         userFetch.get(url).then(res => {
//             res.json().then(json => {
//                 if (json === false || json.length === 0) {
//                     dispatch(fetchPostsError)
//                     reject()
//                 } else {
//                     dispatch(fetchPostsSuccess(json))
//                     resolve()
//                 }
//             }).catch(() =>  {
//                 dispatch(fetchPostsError)
//                 reject()
//             });
//         }).catch(() =>  {
//             dispatch(fetchPostsError)
//             reject()
//         });
//     })
    
// }