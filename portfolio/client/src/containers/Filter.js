import { withRouter } from "react-router-dom";

import React, { Component } from "react";
class Filter extends Component {
  constructor(props) {
    super(props);
    window.component = this;
    let path = window.location.pathname;
    if (path === "/") {
      this.props.history.push("/");
    } else if (path.substr(0, 4) !== "/web") {
      console.log("error page");
    } else if (path !== this.props.base) {
      this.props.history.push(path.substr(4));
    }
  }

  render() {
    return <div />;
  }
}

export default withRouter(Filter);
