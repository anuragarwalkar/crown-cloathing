const { createContext } = require("react");
const { SHOP_DATA } = require("../../constants/shop");

const CollectionContext = createContext(SHOP_DATA);

export default CollectionContext;
