//reducer
import { combineReducers } from 'redux';
import posts from './reducerPosts';
import post from './reducerContent';

export default combineReducers({
    posts,
    post
})
