import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../scss/AppBarBtn.scss";

/*
import { Link } from "react-router-dom";
const LinkOrA = ({ name, path }) => {
  if (path === undefined) {
    return name;
  } else if (path.indexOf("http") !== -1) {
    return (
      <a className="app-bar-btn-link" href={path}>
        {name}
      </a>
    );
  } else {
    return (
      <Link className="app-bar-btn-link" to={path}>
        {name}
      </Link>
    );
  }
};
 */
class AppBarBtn extends Component {
  render() {
    let name = this.props.name;
    let path = this.props.path;
    let label = this.props.ariaLabel;

    return (
      <button
        className="material-icons mdc-top-app-bar__navigation-icon"
        aria-label={label === undefined ? "" : label}
        onClick={() => {
          if (path === undefined) {
            return;
          } else if (path.indexOf("http") === -1) {
            this.props.history.push(path);
          } else {
            window.location.href = path;
          }
        }}
      >
        {name}
      </button>
    );
  }
}

export default withRouter(AppBarBtn);
