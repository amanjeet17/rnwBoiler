import { USER_LOGGED_IN,USER_LOGGED_OUT } from "../actionTypes/auth";

export const login = data => {
    return {
      type: USER_LOGGED_IN,
      payload: data,
    };
  };

export const logout = () => {
    return {
      type: USER_LOGGED_OUT,
    };
  };