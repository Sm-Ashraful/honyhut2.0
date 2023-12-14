import { CATEGORIES_ACTION_TYPE } from "./categories.type";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};
export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPE.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
