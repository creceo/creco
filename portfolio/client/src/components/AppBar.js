import React from "react";
import "../scss/AppBar.scss";
import AppBarBtn from "./AppBarBtn";
const AppBar = ({ title }) => {
  return (
    <header id="appbar" className="mdc-top-app-bar mdc-top-app-bar--fixed">
      <div className="mdc-top-app-bar__row">
        <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <AppBarBtn name={"menu"} />
          <AppBarBtn name={"home"} href={"/"} />
          <span className="mdc-top-app-bar__title">{title}</span>
        </section>
        <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
          <AppBarBtn name={"file_download"} ariaLabel={"Download Resume."} />
          <AppBarBtn
            name={"account_circle"}
            href={"https://github.com/creaticoding"}
            ariaLabel={"Go to github profile."}
          />
        </section>
      </div>
    </header>
  );
};

export default AppBar;
