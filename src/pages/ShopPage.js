import React, { useState } from "react";
import CollectionPreview from "../components/CollectionPreview/CollectionPreview";
import { SHOP_DATA } from "../constants/shop";

function ShopPage() {
  const [shopData] = useState(SHOP_DATA);
  return (
    <div>
      {shopData.map((item) => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ShopPage;
