import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./cartDropdownStyles.scss";

function CartDropdown({ hidden: cartIconHidden }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const checkout = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  };

  return (
    <div className={`cart-dropdown ${cartIconHidden ? "hidden" : ""}`}>
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
