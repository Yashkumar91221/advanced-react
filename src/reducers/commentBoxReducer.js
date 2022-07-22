import * as types from "../actions/types";

const initialState = {
  comments: ["You are handsome", "Keep it up", "Good job!"],
};
const commentBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      console.log(action);
      const comments = state.comments.concat(action.value);
      return { ...state, comments };
    default:
      return state;
  }
};
export default commentBoxReducer;
