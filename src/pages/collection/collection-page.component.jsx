import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import CollectionContext from "../../context/collection/collection.context";
import "./collection-page.styles.scss";

function CollectionPage({ match }) {
  return (
    <CollectionContext.Consumer>
      {(collections) => {
        const { title, items } = collections[match.params.catrgory];
        return (
          <div className="collection-page">
            <div className="title">{title}</div>
            <div className="items">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </CollectionContext.Consumer>
  );
}

export default CollectionPage;
