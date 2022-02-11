import React from "react";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cartIconStyles.scss";

function CartIcon() {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}

export default CartIcon;
