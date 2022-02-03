import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cartIconStyles.scss";

function CartIcon() {
  const dispatch = useDispatch();
  const onClickCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={onClickCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
