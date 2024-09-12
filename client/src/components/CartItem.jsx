import React from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item.id, +e.target.value);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="cart-item-quantity"
        />
        <button onClick={() => onRemove(item.id)} className="cart-item-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
