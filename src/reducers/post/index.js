//reducer
import { combineReducers } from 'redux';
import posts from './reducerPosts';
import content from './reducerContent';
export default combineReducers({
    posts,
    content
})
