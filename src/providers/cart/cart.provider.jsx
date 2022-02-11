import React, { useState } from "react";

import { createContext } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  uClearItemFromCart,
} from "../../redux/cart/cart.reducer";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

function CartProvider({ children }) {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden((_hidden) => !_hidden);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = (item) => {
    const newCartItems = addItemToCart(cartItems, item);
    const count = newCartItems.reduce((a, b) => b.quantity + a, 0);
    setCartItemsCount(count);
    setCartItems(newCartItems);
  };

  const removeItem = (id) => {
    const newCartItems = removeItemFromCart(cartItems, id);
    const count = newCartItems.reduce((a, b) => b.quantity + a, 0);
    setCartItemsCount(count);
    setCartItems(newCartItems);
  };

  const clearItemFromCart = (id) => {
    const newCartItems = uClearItemFromCart(cartItems, id);
    const count = newCartItems.reduce((a, b) => b.quantity + a, 0);
    setCartItemsCount(count);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
