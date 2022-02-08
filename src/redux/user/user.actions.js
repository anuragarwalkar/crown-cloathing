import { SET_CURRENT_USER, SET_CURRENT_USER_INIT } from "./user.types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setCurrentUserInit = (user) => ({
  type: SET_CURRENT_USER_INIT,
  payload: user,
});
