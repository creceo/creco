import React from "react";
import "../scss/AppAside.scss";

const drawer_data = [
  {
    icon: "contacts",
    text: "About Me"
  },
  {
    icon: "view_list",
    text: "Post"
  },
  {
    icon: "format_list_numbered",
    text: "License"
  }
];

const AsideItem = ({ icon, text }) => {
  return (
    <a
      className="creco-theme-text mdc-list-item mdc-list-item--activated "
      href="#"
      aria-selected="true"
    >
      <i
        className="creco-theme-text material-icons mdc-list-item__graphic"
        aria-hidden="true"
      >
        {icon}
      </i>
      <span className="creco-theme-text mdc-list-item__text">{text}</span>
    </a>
  );
};
const AppAside = ({ title, email }) => {
  return (
    <aside
      id="main-aside"
      className="mdc-drawer mdc-drawer--dismissible position-fixed"
    >
      <div className="mdc-drawer__header">
        <h3 className="mdc-drawer__title">{title}</h3>
        <h6 className="mdc-drawer__subtitle">{email}</h6>
      </div>
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          {drawer_data.map(e => (
            <AsideItem {...e} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AppAside;
