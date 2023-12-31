export const selectCartItems = (state) => state.cart.cartItems;
export const selectShippingCost = (state) => state.cart.shippingCost;

export const selectCartOpen = (state) => state.cart.isCartOpen;

export const selectCartCount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
export const selectCartTotalWithoutDiscount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) =>
      total +
      cartItem.quantity *
        (typeof cartItem.offer === "number"
          ? cartItem.price - (cartItem.price * cartItem.offer) / 100
          : cartItem.price),
    0
  );

// export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );
