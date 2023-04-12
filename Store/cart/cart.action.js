import { ActionReducer } from "../../utils/reducer/reducer.utils";
import { cartReducer } from "./cart.reducer";
import { CART_ACTION_TYPE } from "./cart.type";

const addCartItem = (cartItems, productTodd, count) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.id === productTodd.id
  );
  if (existsItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productTodd.id
        ? { ...cartItem, quantity: cartItem.quantity + count }
        : cartItem
    );
  }

  return [...cartItems, { ...productTodd, quantity: count }];
};

const decreaseFromCartItem = (cartItems, productRemove) => {
  const existsItem = cartItems.find(
    (cartItem) => cartItem.id === productRemove.id
  );
  if (existsItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productRemove.id);
  }
  if (existsItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

const removeItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const setIsCartOpen = (bool) =>
  ActionReducer(CART_ACTION_TYPE.SET_CART_OPEN, bool);

export const addItemToCart = (cartItems, productTodd, count = 1) => {
  const newCartItems = addCartItem(cartItems, productTodd, count);
  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};
export const decreaseCartItem = (cartItems, productRemove) => {
  const newCartItems = decreaseFromCartItem(cartItems, productRemove);
  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};
export const removeItem = (cartItems, productToRemove) => {
  const newCartItems = removeItemFromCart(cartItems, productToRemove);

  return ActionReducer(CART_ACTION_TYPE.SET_ITEM_TO_CART, newCartItems);
};

export const addShippingCost = (shippingCost) => {
  console.log("shipping action value: ", shippingCost);
  return ActionReducer(CART_ACTION_TYPE.SET_SHIPPING_COST, shippingCost);
};
