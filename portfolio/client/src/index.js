import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDom from "react-dom";
import React from "react";
import reducers from "./reducers";
import App from "./containers/App";
import "./scss/index.css";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers);

// 스토어
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
