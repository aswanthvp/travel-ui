import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

import { getURL } from "../utils/utils";

const cookies = new Cookies();

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const result = await axios.post(`${getURL()}/login`, {
        userName: username,
        password: password,
      });
      cookies.set("TOKEN", result.data.token, {
        path: "/",
      });
      window.location.href = "/trips";
    } catch (error) {
      console.log(error);
      alert("Unable to login");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 custom-card">
        <h2 className="card-title text-center mb-4">Admin Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
