import CATEGORIES_ACTION_TYPE from "./categories.type";

export const CATEGORY_INITIAL_STATE = {
  categoriesData: [],
};
export const cartReducer = (state = CATEGORY_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORY_DATA:
      return {
        ...state,
        categoriesData: payload,
      };

    default:
      return state;
  }
};
