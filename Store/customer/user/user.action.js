import { USER_ACTION_TYPE } from "./user.type";
import axios from "../../../utils/helper/axios";

export const setCurrentUser = (user) => {
  return (dispatch) => {
    axios
      .post("/signin", { ...user })
      .then((res) => {
        console.log("This else called,", res);
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
