import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import post from './reducers/post'
import rank from './reducers/rank'
import addPost from './reducers/addPost'
import auth from './reducers/login'
import hashtags from './reducers/hashtag'

const rootReducer = combineReducers({
  router: routerReducer,
  post,
  rank,
  addPost,
  auth,
  hashtags
});
export default rootReducer;