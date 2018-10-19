import React from "react";
import "../scss/AppBar.scss";

const Post = ({ title, preview }) => {
  return (
    <li className="mdc-list-item">
      <span className="mdc-list-item__text">
        <span className="mdc-list-item__primary-text">{title}</span>
        <span className="mdc-list-item__secondary-text">{preview}</span>
      </span>
    </li>
  );
};

export default Post;
