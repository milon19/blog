import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const handleLogout = () => {
    localStorage.setItem("accessToken", null);
    console.log(localStorage.getItem("accessToken"));
  };
  return (
    <div
      className="container"
      style={{ minHeight: "100vh", paddingTop: "200px" }}
    >
      <h2>You have been logged out</h2>
      <div className="border-top pt-3">
        <p>
          <Link className="btn btn-danger" onClick={handleLogout()} to="/login">
            Log in again
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Logout;
