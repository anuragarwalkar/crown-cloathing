import React from "react";
import { useHistory } from "react-router-dom";
import "./menuItemStyle.scss";

function MenuItem({ title, imageUrl, linkUrl }) {
  const history = useHistory();
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span
          className="subtitle"
          onClick={() => {
            history.push(linkUrl);
          }}
        >
          Shop Now
        </span>
      </div>
    </div>
  );
}

export default MenuItem;
