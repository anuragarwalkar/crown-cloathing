import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const seletCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    Object.keys(collections).map((key) => {
      const { items, ...rest } = collections[key];

      return {
        ...rest,
        items: items.filter((_, idx) => idx < 4),
      };
    })
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
