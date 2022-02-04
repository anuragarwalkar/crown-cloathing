import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../components/CollectionPreview/CollectionPreview";
import { selectShopCollections } from "../redux/shop/shop.selector";

function ShopPage() {
  const collections = useSelector(selectShopCollections);

  return (
    <div>
      {collections.map((item) => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ShopPage;
