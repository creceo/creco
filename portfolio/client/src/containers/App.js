import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import AboutRoute from "../routes/AboutRoute";
import PostRoute from "../routes/PostRoute";
import LoginRoute from "../routes/LoginRoute";
import Filter from "./Filter";
import "../scss/App.scss";
import { connect } from "react-redux";
import * as actions from "../actions";
import AppBar from "../components/AppBar";
import AppAside from "../components/AppAside";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
class App extends Component {
  componentDidMount() {
    const mdcTopAppBar = new MDCTopAppBar(document.getElementById("appbar"));
    const mdcDrawer = new MDCDrawer(document.getElementById("main-aside"));
    mdcTopAppBar.setScrollTarget(document.getElementById("main-content"));
    mdcTopAppBar.listen("MDCTopAppBar:nav", () => {
      mdcDrawer.open = !mdcDrawer.open;
    });
  }
  render() {
    const base = "/web";
    return (
      <BrowserRouter basename={base}>
        <div className="App">
          <Filter />
          <AppAside title={"정 석 호"} email={"creaticoding@gmail.com"} />
          <div className="mdc-drawer-app-content">
            <AppBar title={"CreatiCoding"} />
            <div id="main-content" className="main-content position-relative">
              <div className="main-content-center">
                <Route exact path="/home" component={HomeRoute} />
                <Route exact path="/about" component={AboutRoute} />
                <Route exact path="/post" component={PostRoute} />
                <Route exact path="/post/:post_idx" component={PostRoute} />
                <Route exact path="/login" component={LoginRoute} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToPrpos = state => {
  return {
    message: state.messageReducer.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChaneMessage: message => {
      dispatch(actions.changeMessage(message));
    }
  };
};
export default connect(
  mapStateToPrpos,
  mapDispatchToProps
)(App);
