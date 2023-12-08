import { PRODUCT_ACTION_CONST } from "./product.types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_CONST.SET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
