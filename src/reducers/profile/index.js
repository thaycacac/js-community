import { combineReducers } from 'redux';
import profileRank from './reducerRank';
import profilePost from './reducerPost';

export default combineReducers({
    profileRank,
    profilePost
})