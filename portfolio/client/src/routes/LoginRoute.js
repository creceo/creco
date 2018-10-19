import React from "react";
import "../scss/LoginRoute.scss";
import LoginForm from "../containers/LoginForm";
const LoginRoute = ({ match }) => {
  return (
    <div className="login-container">
      <div className="login-form-box">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginRoute;
