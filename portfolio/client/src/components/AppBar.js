import React from "react";
import "../scss/AppBar.scss";
import AppBarBtn from "./AppBarBtn";
import { BrowserRouter as Router } from "react-router-dom";

const AppBar = ({ title }) => {
  return (
    <header
      id="appbar"
      className="mdc-top-app-bar mdc-top-app-bar--fixed mdc-elevation--z10"
    >
      <Router>
        <div className="mdc-top-app-bar__row">
          {/* LEFT SIDE */}
          <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <AppBarBtn name={"menu"} />
            <AppBarBtn name={"home"} path={"/"} />
            <span className="mdc-top-app-bar__title">{title}</span>
          </section>
          {/* RIGHT SIDE */}
          <section className="creco-theme mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <AppBarBtn name={"file_download"} ariaLabel={"Download Resume."} />
            <AppBarBtn
              name={"account_circle"}
              path={"https://github.com/creaticoding"}
              ariaLabel={"Go to github profile."}
            />
          </section>
        </div>
      </Router>
    </header>
  );
};

export default AppBar;
