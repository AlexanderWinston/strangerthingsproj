import React, { useState } from "react";
import { Navbar, Posts, Register, Login, Logout, LoggedIn } from "./";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  return (
    <div id="main">
      <Navbar />
      <Register setIsLoggedIn = {setIsLoggedIn}/>
    <br/>
      <Posts />
    <br/>
    <Login setIsLoggedIn = {setIsLoggedIn}/>
    <LoggedIn isLoggedIn = {isLoggedIn}/>
    <Logout setIsLoggedIn = {setIsLoggedIn}/>
    </div>
  );
};

export default Main;
