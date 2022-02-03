import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

const perssistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default persistReducer(perssistConfig, rootReducer);
