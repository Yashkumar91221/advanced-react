import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initialState = {
  authenticated: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, authenticated: true };
    case SIGN_OUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};
export default authReducer;
