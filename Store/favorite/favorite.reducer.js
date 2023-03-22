import { FAVORITE_ACTION_TYPE } from "./favorite.type";

export const FAV_INITIAL_STATE = {
  isFavExist: false,
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
      console.log("Heelo Iam Reducer");
      return {
        ...state,
        isFavExist: payload,
      };

    default:
      return state;
  }
};
