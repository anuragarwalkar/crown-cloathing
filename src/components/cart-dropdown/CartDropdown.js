import React from "react";
import { connect, useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./cartDropdownStyles.scss";

function CartDropdown({ cartItems }) {
  const cartIconHidden = useSelector((state) => state.cart.hidden);
  return (
    <div className={`cart-dropdown ${cartIconHidden ? "hidden" : ""}`}>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton onClick={() => {}}>Go To Checkout</CustomButton>
    </div>
  );
}

const mapStateToprops = ({ cart: { cartItems } }) => ({
  cartItems,
});
// const mapDispatchToProps = () => {};
export default connect(mapStateToprops)(CartDropdown);
