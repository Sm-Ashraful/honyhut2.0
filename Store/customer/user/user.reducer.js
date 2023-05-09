import { USER_ACTION_TYPE } from "./user.type";

const INITIAL_STATE = {
  token: null,
  currentUser: {
    name: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  message: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };

    case USER_ACTION_TYPE.SET_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        currentUser: payload.user,
        authenticate: true,
        authenticating: false,
      };
    case USER_ACTION_TYPE.SET_SIGNOUT_REQUEST:
      return {
        ...INITIAL_STATE,
      };

    case USER_ACTION_TYPE.SET_SIGNUP_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case USER_ACTION_TYPE.SET_SIGNUP_SUCCESS:
      return {
        ...state,
        token: payload.token,
        currentUser: payload.user,
        authenticate: true,
        authenticating: false,
        message: payload.message,
      };

    default:
      return state;
  }
};
