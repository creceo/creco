import React from "react";

const AppBarBtn = ({ name, url, ariaLabel }) => {
  return (
    <button
      href={url === undefined ? "#" : url}
      className="material-icons mdc-top-app-bar__navigation-icon"
      aria-label={ariaLabel === undefined ? "" : ariaLabel}
    >
      {name}
    </button>
  );
};

export default AppBarBtn;
