import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from './reducers/auth';
const rootReducer = combineReducers({
  router: routerReducer,
  auth
});
export default rootReducer;