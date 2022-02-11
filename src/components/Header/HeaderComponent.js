import React, { useState } from "react";
import "./headerComponentStyles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebaseInit";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import { useContext } from "react";
import CurrentUserContext from "../../context/user/user.context";
import { CartContext } from "../../providers/cart/cart.provider";

function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  const onLogout = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={onLogout}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      <CartDropdown hidden={hidden} />
    </div>
  );
}

export default Header;
