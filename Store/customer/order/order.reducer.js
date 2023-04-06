import { ORDER_ACTION_TYPE } from "./order.type";

export const initialState = {
  items: [],
  shippingAddress: {},
  billingAddress: {},
  payment: {},
  status: "pending",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ACTION_TYPE.ADD_ITEM_TO_ORDER_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ORDER_ACTION_TYPE.UPDATE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case ORDER_ACTION_TYPE.UPDATE_BILLING_ADDRESS:
      return {
        ...state,
        billingAddress: action.payload,
      };
    case ORDER_ACTION_TYPE.UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case ORDER_ACTION_TYPE.UPDATE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
