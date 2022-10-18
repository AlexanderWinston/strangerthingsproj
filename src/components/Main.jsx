import React from "react";
import { Navbar, Posts, Register, Login, Logout } from "./";
const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Register/>
    <br/>
      <Posts />
    <br/>
    <Login/>
    <Logout/>
    </div>
  );
};

export default Main;
