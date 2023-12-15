import { USER_ACTION_TYPE } from "./user.type";
import axios from "../../../utils/helper/axios";

export const setCurrentUser = (user) => {
  return (dispatch) => {
    axios
      .post("/signin", { ...user })
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          dispatch({
            type: USER_ACTION_TYPE.SET_LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        } else {
          if (res.status === 400) {
            dispatch({
              type: USER_ACTION_TYPE.SET_LOGIN_FAILED,
              payload: { error: res.data.error },
            });
          }
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_ACTION_TYPE.SET_LOGIN_FAILED,
          payload: {
            error: "An error occurred while logging in. Please try again.",
          },
        });
      });
  };
};
export const signout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: USER_ACTION_TYPE.SET_SIGNOUT_REQUEST,
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post("/signup", { ...user })
      .then((res) => {
        if (res.status === 201) {
          const { token, user, message } = res.data;
          localStorage.setItem("token", token);
          dispatch({
            type: USER_ACTION_TYPE.SET_SIGNUP_SUCCESS,
            payload: {
              message,
              token,
              user,
            },
          });
        } else {
          if (res.status === 400) {
            dispatch({
              type: USER_ACTION_TYPE.SET_SIGNUP_FAILED,
              payload: { error: res.data.error },
            });
          }
        }
      })
      .catch((error) => {
        s;
        dispatch({
          type: USER_ACTION_TYPE.SET_SIGNUP_FAILED,
          payload: {
            error: "An error occurred while logging in. Please try again.",
          },
        });
      });
  };
};
