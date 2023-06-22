import { CATEGORIES_ACTION_TYPE } from "./categories.type";
import axios from "@/utils/helper/axios";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};
export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_SUCCESS:
      console.log("payload.categories", payload);
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
