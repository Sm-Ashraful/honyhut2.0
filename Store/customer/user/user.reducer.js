import { USER_ACTION_TYPE } from "./user.type";

const INITIAL_STATE = {
  token: null,
  currentUser: {
    name: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
      break;
    case USER_ACTION_TYPE.SET_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        currentUser: payload.user,
        authenticate: true,
        authenticating: false,
      };
      break;
    default:
      return state;
  }
};
