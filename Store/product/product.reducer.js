import { PRODUCT_ACTION_TYPE } from "./product.type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPE.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };

    default:
      return state;
  }
};
