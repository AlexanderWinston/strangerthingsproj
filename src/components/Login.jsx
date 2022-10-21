import React, { useState } from "react";
import { Register, isLoggedIn } from "./";
import { loginUser } from "../api-adapter";

const Login = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const loggedInUser = await loginUser(username, password);
    const token = loggedInUser.token;
    setIsLoggedIn(true)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem('user', username);
    localStorage.setItem("token", token);
    }
  return (
    <div>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginUsername">Username: </label>
          <input id="loginUsername" type="text" required />
          <label htmlFor="loginPassword">Password: </label>
          <input id="loginPassword" type="password" />
          <button onClick={props.onClick} type="submit">
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
