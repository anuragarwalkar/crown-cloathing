import { ADD_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const addItemToCart = (cartItems, cartItemToAdd) => {
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

    default:
      return state;
  }
};

export default cartReducer;
