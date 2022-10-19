import React, { useState } from "react";
import { Navbar, Posts, Register, Login, Logout, LoggedIn } from "./";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  return (
    <div id="main">
      <Navbar />
      <Register/>
    <br/>
      <Posts />
    <br/>
    <Login/>
    <LoggedIn/>
    <Logout/>
    </div>
  );
};

export default Main;
