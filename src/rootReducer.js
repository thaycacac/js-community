import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import post from './reducers/post'
import rank from './reducers/rank'
import addPost from './reducers/addPost'
import auth from './reducers/login';
import profileRank from './reducers/profile'
const rootReducer = combineReducers({
  router: routerReducer,
  post,
  rank,
  addPost,
  auth,
  profileRank
});
export default rootReducer;