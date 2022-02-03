import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cartIconStyles.scss";

function CartIcon({ itemCount }) {
  const dispatch = useDispatch();
  const onClickCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={onClickCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
