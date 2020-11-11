import React from "react";

import LoginForm from "./LoginForm";

import { postLogin } from "../../services/authenticationsAPIService";

const loginInit = {
  email: "",
  password: "",
};

const Login = (props) => {
  const doLogin = (values) => {
    postLogin(values)
      .then((response) => {
        const { data } = response;
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        props.history.push("/");
      })
      .catch((error) => {
        console.log("doLogin -> error", error);
        alert("Enter a valid Email and Password");
      });
  };

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
