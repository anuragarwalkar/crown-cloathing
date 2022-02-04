import { SHOP_DATA } from "../../constants/shop";

const initialState = { collections: SHOP_DATA };

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      break;

    default:
      return state;
  }
};

export default shopReducer;
