import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import './collection-page.styles.scss';

function CollectionPage({match}) {
  const collection = useSelector(selectShopCollection(match.params.catrgory))
  
  return <div>{collection && <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />}</div>;
}

export default CollectionPage;
