import React from 'react';
import { useSelector } from 'react-redux';
import { seletCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

function CollectionOverview() {
    const collections = useSelector(seletCollectionForPreview);

  return <div className='collection-overview'>
  {collections.map((item) => {
    return <CollectionPreview key={item.id} {...item} />;
  })}
</div>;
}

export default CollectionOverview;
