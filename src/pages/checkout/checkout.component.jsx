import React from "react";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../providers/cart/cart.provider";
import "./checkout.styles.scss";

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${0}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
