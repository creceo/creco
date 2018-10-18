import React from "react";
import { Link } from "react-router-dom";
import "../scss/AppBarBtn.scss";

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


const AppBarBtn = ({ name, path, ariaLabel }) => {
  return (
    <button
      href={path === undefined ? "#" : path}
      className="material-icons mdc-top-app-bar__navigation-icon"
      aria-label={ariaLabel === undefined ? "" : ariaLabel}
    >
      <LinkOrA name={name} path={path} />
    </button>
  );
};

export default AppBarBtn;
