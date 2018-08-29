//reducer
import { combineReducers } from 'redux';
import posts from './reducerPosts';
import post from './reducerContent';
import likes from './reducerPostLikes';
import comments from './reducerPostComment';

export default combineReducers({
    posts,
    post,
    likes,
    comments
})
