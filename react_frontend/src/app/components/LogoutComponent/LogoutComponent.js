import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  // window.location.href = "/logout";
  return (
    <div
      className="container"
      style={{ minHeight: "100vh", paddingTop: "200px" }}
    >
      <h2>You have been logged out</h2>
      <div className="border-top pt-3">
        <p>
          <Link className="btn btn-danger" to="/react/login">
            Log in again
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Logout;
