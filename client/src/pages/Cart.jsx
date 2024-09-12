import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
import {
  selectCartItems,
  selectCartTotalPrice,
  selectIsCartEmpty,
} from "../features/cart/cartSelectors";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const isCartEmpty = useSelector(selectIsCartEmpty);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  if (isCartEmpty) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>${item.price * item.quantity}</div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-right mt-4">
        <h2 className="text-2xl">Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
