import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = () => {
  const navigate = useNavigate();
  const token = cookies.get("TOKEN");
  const handleLogout = () => {
    // Clear the cookies by setting an empty value and expiration date in the past
    cookies.set("TOKEN", "", { path: "/", expires: new Date(0) });

    // Redirect the user to the desired location after logout (e.g., the login page)
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MyTrip
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {token ? (
            <li className="nav-item">
              <Link className="nav-link" to="/trips">
                Trips
              </Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
