import {
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = (cartItem) => ({
  type: ADD_ITEM,
  payload: cartItem,
});

export const clearCartItem = (itemId) => ({
  type: CLEAR_ITEM,
  payload: itemId,
});

export const removeCartItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});
