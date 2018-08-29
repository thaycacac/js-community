import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import post from './reducers/post'
import rank from './reducers/rank'
import addPost from './reducers/addPost'

const rootReducer = combineReducers({
  router: routerReducer,
  post,
  rank,
  addPost
});
export default rootReducer;