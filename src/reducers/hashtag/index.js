
import postHashtags from './reducerPostHashtags'
import allHashtags from './reducerAllHashtags'
import {combineReducers} from 'redux';

export default combineReducers({
    postHashtags,
    allHashtags
})
