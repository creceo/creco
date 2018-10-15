import React from "react";
import "../scss/AppAside.scss";
import { Link } from "react-router-dom";

// Initial Data for drawer
const drawer_data = [
  {
    icon: "contacts",
    text: "About Me",
    path: "/about"
  },
  {
    icon: "view_list",
    text: "Post",
    path: "/post"
  },
  {
    icon: "format_list_numbered",
    text: "License",
    path: "/license"
  }
];

// drawer item
const AsideItem = ({ icon, text, path }) => {
  return (
    <Link
      className="creco-theme-text mdc-list-item mdc-list-item--activated "
      href="#"
      aria-selected="true"
      to={path}
    >
      <i
        className="creco-theme-text material-icons mdc-list-item__graphic"
        aria-hidden="true"
      >
        {icon}
      </i>
      <span className="creco-theme-text mdc-list-item__text">{text}</span>
    </Link>
  );
};
// aside that is list of drawer item
const AppAside = ({ title, email }) => {
  return (
    <aside
      id="main-aside"
      className="mdc-drawer mdc-drawer--dismissible position-fixed "
    >
      <div className="mdc-drawer__header">
        <h3 className="mdc-drawer__title">{title}</h3>
        <h6 className="mdc-drawer__subtitle">{email}</h6>
      </div>
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
          {drawer_data.map((e, i) => (
            <AsideItem {...e} key={i} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AppAside;
