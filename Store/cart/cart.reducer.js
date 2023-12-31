import { CART_ACTION_TYPE } from "./cart.type";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  shippingCost: 0,
};
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_ITEM_TO_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.SET_SHIPPING_COST:
      return {
        ...state,
        shippingCost: payload,
      };
    case CART_ACTION_TYPE.SET_CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
