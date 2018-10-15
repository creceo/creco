import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import AboutRoute from "../routes/AboutRoute";
import PostRoute from "../routes/PostRoute";
import logo from "../images/logo.svg";
import "../scss/App.scss";
import { connect } from "react-redux";
import * as actions from "../actions";
import AppTitle from "../components/AppTitle";
import AppBar from "../components/AppBar";
import AppAside from "../components/AppAside";
import { Link } from "react-router-dom";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";

class App extends Component {
  componentDidMount() {
    const test = new MDCTopAppBar(document.getElementById("appbar"));
    const test2 = new MDCDrawer(document.getElementById("main-aside"));
    console.log(test, test2);
    test.setScrollTarget(document.getElementById("main-content"));
    test.listen("MDCTopAppBar:nav", () => {
      test2.open = !test2.open;
    });
  }
  ㄴ;
  render() {
    return (
      <div className="App">
        <AppAside title={"정 석 호"} email={"creaticoding@gmail.com"} />
        <div className="mdc-drawer-app-content">
          <AppBar title={"CreatiCoding"} />
          <Router>
            <div id="main-content" className="main-content position-relative">
              <div>
                <Link to="/">홈으로</Link>
                <br />
                <Link to="/post">게시판</Link>
                <br />
                <Link to="/post/test">게시판테스트</Link>
                <br />
                <Link to="/about">자세히</Link>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                asd
              </div>
              <div className="app">
                <Route exact path="/" component={HomeRoute} />
                <Route exact path="/about" component={AboutRoute} />
                <Route exact path="/post" component={PostRoute} />
                <Route exact path="/post/:post_idx" component={PostRoute} />
              </div>
            </div>
          </Router>
        </div>
      </div>
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
