import React, { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { name, id, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  const addItemToCart = () => {
    addItem(cartItem);
  };

  const removeItemFromCart = () => {
    removeItem(id);
  };

  const onclearCartItem = () => {
    clearItemFromCart(id);
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onclearCartItem}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
