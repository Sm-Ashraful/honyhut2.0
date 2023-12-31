export const selectFavItems = (state) => state.favorite.favItems;

export const selectCartCount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
