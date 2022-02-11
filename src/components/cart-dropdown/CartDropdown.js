import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cart/cart.provider";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./cartDropdownStyles.scss";

function CartDropdown() {
  const { hidden, toggleHidden, cartItems } = useContext(CartContext);

  const history = useHistory();

  const checkout = () => {
    toggleHidden();
    history.push("/checkout");
  };

  return (
    <div className={`cart-dropdown ${hidden ? "hidden" : ""}`}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={checkout}>Go To Checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
