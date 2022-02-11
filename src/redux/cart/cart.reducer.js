import {
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const removeItemFromCart = (cartItems, cartItemId) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemId
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemId);
  }

  return cartItems.map((item) => {
    if (item.id === cartItemId) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.some((item) => cartItemToAdd.id === item.id);

  if (existingItem) {
    return cartItems.map((item) => {
      if (item.id === cartItemToAdd.id) {
        const quantity = item.quantity;
        if (quantity) {
          return {
            ...item,
            quantity: quantity + 1,
          };
        }
      }

      return item;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const uClearItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      const oldCartItems = [...state.cartItems];

      return {
        ...state,
        cartItems: addItemToCart(oldCartItems, action.payload),
      };

    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: uClearItemFromCart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
