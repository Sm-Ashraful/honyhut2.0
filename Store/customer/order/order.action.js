import { ORDER_ACTION_TYPE } from "./order.type";
// add an item to the order
const addItem = (item) => {
  return {
    type: ORDER_ACTION_TYPE.ADD_ITEM_TO_ORDER_LIST,
    payload: item,
  };
};

// update the shipping address
const updateShippingAddress = (address) => {
  return {
    type: ORDER_ACTION_TYPE.UPDATE_SHIPPING_ADDRESS,
    payload: address,
  };
};

// update the billing address
const updateBillingAddress = (address) => {
  return {
    type: ORDER_ACTION_TYPE.UPDATE_SHIPPING_ADDRESS,
    payload: address,
  };
};

// update the payment information
const updatePayment = (payment) => {
  return {
    type: ORDER_ACTION_TYPE.UPDATE_PAYMENT,
    payload: payment,
  };
};

// update the order status
const updateStatus = (status) => {
  return {
    type: ORDER_ACTION_TYPE.UPDATE_STATUS,
    payload: status,
  };
};
