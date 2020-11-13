import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { verifyToken } from "../../services/authenticationsAPIService";

const handleLogout = () => {
  localStorage.setItem("accessToken", null);
  console.log("handleLogout -> asdasdasda");

  window.location.href = "/react/logout";
};

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const data = {
      token: token,
    };
    verifyToken(data)
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [token, isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/react">
        Example Blog
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/react/posts">
              Posts
            </NavLink>
          </li>

          {isAuthenticated === true && (
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={() => handleLogout()}>
                Logout
              </Link>
            </li>
          )}

          {isAuthenticated === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/react/login">
                Login
              </NavLink>
            </li>
          )}

          {isAuthenticated === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/react/register">
                Register
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
