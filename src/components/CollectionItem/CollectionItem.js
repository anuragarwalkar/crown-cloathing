import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/CustomButton";
import "./collectionItemStyles.scss";

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const onAddCartItem = () => {
    dispatch(addCartItem(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={onAddCartItem}>ADD TO CART</CustomButton>
    </div>
  );
}

export default CollectionItem;
