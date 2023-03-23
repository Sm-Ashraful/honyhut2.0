import { FAVORITE_ACTION_TYPE } from "./favorite.type";

export const FAV_INITIAL_STATE = {
  favItems: [],
};
export const favReducer = (state = FAV_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ACTION_TYPE.SET_ITEM_TO_FAVORITE:
      return {
        ...state,
        favItems: payload,
      };
    case FAVORITE_ACTION_TYPE.SET_FAVORITE_EXIST:
      return {
        ...state,
        favItems: payload,
      };

    default:
      return state;
  }
};
