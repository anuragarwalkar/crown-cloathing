import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import "./cartDropdownStyles.scss";

function CartDropdown() {
  const cartIconHidden = useSelector((state) => state.cart.hidden);
  return (
    <div className={`cart-dropdown ${cartIconHidden ? "hidden" : ""}`}>
      <div className="cart-items"></div>
      <CustomButton onClick={() => {}}>Go To Checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
