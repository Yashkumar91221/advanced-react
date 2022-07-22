import { ADD_COMMENT, SIGN_IN, SIGN_OUT } from "./types";

export const add_comment = (comment) => {
  return { type: ADD_COMMENT, value: comment };
};

export const sign_in = () => {
  console.log("sign in called");
  return {
    type: SIGN_IN,
  };
};

export const sign_out = () => {
  console.log("sign out called");

  return {
    type: SIGN_OUT,
  };
};
