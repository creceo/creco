import React from "react";
import "../scss/AppBar.scss";
import { MDCTopAppBar } from "@material/top-app-bar/index";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

const AppBar = ({ message }) => {
  return (
    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
            menu
          </a>
          <span class="mdc-top-app-bar__title">Title</span>
        </section>
      </div>
    </header>
  );
};

export default AppBar;

/*

<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
      <span class="mdc-top-app-bar__title">Title</span>
    </section>
  </div>
</header>

*/
