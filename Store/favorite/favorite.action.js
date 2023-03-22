import { ActionReducer } from "../../utils/reducer/reducer.utils";
import { FAVORITE_ACTION_TYPE } from "./favorite.type";

const addFavItem = (favItems, productTodd) => {
  const existsItem = favItems.find((favItem) => favItem.id === productTodd.id);
  if (existsItem) {
    return [...favItems];
  }

  return [...favItems, { ...productTodd }];
};

const removeItemFromFav = (favItems, productToRemove) => {
  return favItems.filter((favItem) => favItem.id !== productToRemove.id);
};

export const isItemExists = (favItems, productToCheck) => {
  const existsItem = favItems.find(
    (favItem) => favItem.id === productToCheck.id
  );
  if (existsItem) {
    return ActionReducer(FAVORITE_ACTION_TYPE.SET_FAVORITE_EXIST, false);
  }
  return ActionReducer(FAVORITE_ACTION_TYPE.SET_FAVORITE_EXIST, true);
};

export const addItemToFav = (favItems, productTodd) => {
  const newFavItems = addFavItem(favItems, productTodd);
  return ActionReducer(FAVORITE_ACTION_TYPE.SET_ITEM_TO_FAVORITE, newFavItems);
};
export const removeItem = (favItems, productToRemove) => {
  const newFavItems = removeItemFromFav(favItems, productToRemove);

  return ActionReducer(FAVORITE_ACTION_TYPE.SET_ITEM_TO_FAVORITE, newFavItems);
};
