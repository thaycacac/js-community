import { combineReducers } from 'redux';
import addLike from './reducerLike'
import addComment from './reducerComment'

export default combineReducers({
    addLike,
    addComment
})