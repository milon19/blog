import React from "react";

import LoginForm from "./LoginForm";

const doLogin = (values) => {
  console.log(values);
};

const loginInit = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <h1 className="mt-4 mb-3">
        Login
        <small>Form</small>
      </h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Login</li>
      </ol>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <LoginForm loginInit={loginInit} doLogin={doLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
