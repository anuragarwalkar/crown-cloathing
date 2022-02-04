import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./collectionPreview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default CollectionPreview;
