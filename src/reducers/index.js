import { combineReducers } from "redux";
import authReducer from "./authReducer";
import commentBoxReducer from "./commentBoxReducer";

export default combineReducers({
  commentBox: commentBoxReducer,
  auth: authReducer,
});
