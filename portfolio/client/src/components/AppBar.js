import React from "react";
import "../scss/AppBar.scss";
import AppBarBtn from "./AppBarBtn";

const AppBar = ({ title }) => {
  return (
    <header
      id="appbar"
      className="mdc-top-app-bar mdc-top-app-bar--fixed mdc-elevation--z10"
    >
      <div className="mdc-top-app-bar__row">
        {/* LEFT SIDE */}
        <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <AppBarBtn name={"menu"} />
          <AppBarBtn name={"home"} path={"/home"} />
          <span className="mdc-top-app-bar__title">{title}</span>
        </section>
        {/* RIGHT SIDE */}
        <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
          <AppBarBtn name={"file_download"} ariaLabel={"Download Resume."} />
          <AppBarBtn
            name={"account_circle"}
            path={"/login"}
            ariaLabel={"Go to github profile."}
          />
        </section>
      </div>
    </header>
  );
};

export default AppBar;
