import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem, clearCartItem, removeCartItem } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss'

function CheckoutItem({cartItem }) {
  const {name, id,imageUrl, price,quantity} = cartItem;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addCartItem(cartItem));
  }

  const removeItem = () => {
    dispatch(removeCartItem(id));
  }

  const onclearCartItem = () =>  {
    dispatch(clearCartItem(id));
  }

  return <div className='checkout-item'>
    <div className="image-container">
      <img src={imageUrl} alt="img"  />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={removeItem}>&#10094;</div>
     <span className='value'>{quantity}</span> 
      <div className="arrow" onClick={addItem}>&#10095;</div>
      </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={onclearCartItem}>
    &#10005;
    </div>
  </div>;
}

export default CheckoutItem;
