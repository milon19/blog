import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { verifyToken } from "../../services/authenticationsAPIService";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token] = useState(localStorage.getItem("accessToken"));

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
    console.log("NavBar -> isAuthenticated", isAuthenticated);
  }, [token, isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
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
            <NavLink className="nav-link" to="/posts">
              {isAuthenticated && <h1>hello</h1>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>

          {isAuthenticated === true && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
          )}
          {isAuthenticated === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
          {isAuthenticated === false && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
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
