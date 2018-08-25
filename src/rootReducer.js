import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import post from './reducers/post';
const rootReducer = combineReducers({
  router: routerReducer,
  post
});
export default rootReducer;