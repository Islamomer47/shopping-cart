export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectCartTotalPrice = (state) => {
  return state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectIsCartEmpty = (state) => state.cart.items.length === 0;
