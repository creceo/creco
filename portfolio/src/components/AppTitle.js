import React from "react";
import "../css/AppTitle.css";
import AppBar from "@material-ui/core/AppBar";

// Instantiation
//const topAppBarElement = document.querySelector(".mdc-top-app-bar");
//const AppBar = new AppBar(topAppBarElement);

const AppTitle = ({ message }) => {
  return (
    <header class="mdc-top-app-bar">
      <AppBar class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
            menu
          </a>
          <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
            sdsd
          </a>
          <span class="mdc-top-app-bar__title">{message}</span>
        </section>
      </AppBar>
    </header>
  );
};
/*

        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
            menu
          </a>
          <span class="mdc-top-app-bar__title">{message}</span>
        </section>
*/
export default AppTitle;
