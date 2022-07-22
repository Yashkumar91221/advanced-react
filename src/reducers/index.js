import { combineReducers } from "redux";
import commentBoxReducer from "./commentBoxReducer";

export default combineReducers({
  commentBox: commentBoxReducer,
});
