import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../scss/LoginForm.scss";

import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="login-logo">CreatiCoding</div>
        <form className="login-form" action="home.html">
          <br />
          <div className="mdc-text-field username">
            <input
              type="text"
              className="mdc-text-field__input"
              id="username-input"
              name="username"
              required
            />
            <label className="mdc-floating-label" alt="username-input">
              Username
            </label>
            <div className="mdc-line-ripple" />
          </div>
          <br />
          <br />
          <br />
          <div className="mdc-text-field password">
            <input
              type="password"
              className="mdc-text-field__input"
              id="password-input"
              name="password"
              required
              minLength="8"
            />
            <label className="mdc-floating-label" alt="password-input">
              Password
            </label>
            <div className="mdc-line-ripple" />
          </div>
          <br />
          <br />
          <br />
          <div className="button-container">
            <button
              type="button"
              className="mdc-button cancel"
              onClick={this.props.history.goBack}
            >
              Cancel
            </button>
            <button className="mdc-button mdc-button--raised login">
              Login
            </button>
          </div>
        </form>
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
)(withRouter(LoginForm));
