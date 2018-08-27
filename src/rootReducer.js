import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import post from './reducers/post'
import rank from './reducers/rank'

const rootReducer = combineReducers({
  router: routerReducer,
  post,
  rank
});
export default rootReducer;