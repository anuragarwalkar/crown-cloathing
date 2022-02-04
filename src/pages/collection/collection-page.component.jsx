import React from 'react';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import './collection-page.styles.scss';

function CollectionPage({match}) {
  const {title, items} = useSelector(selectShopCollection(match.params.catrgory))
  
  return <div className='collection-page'>
    <div className="title">{title}</div>
    <div className="items">
      {items.map(item=> <CollectionItem key={item.id} item={item} />)}
    </div>
  </div>;
}

export default CollectionPage;
