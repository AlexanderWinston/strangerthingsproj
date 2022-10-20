import React, { useState } from "react";
import { Navbar, Posts, Register, Login, Logout, LoggedIn, SinglePost } from "./";
import { Link } from "react-router-dom";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  return (
    <div id="main">
      <Navbar />
      <Register setIsLoggedIn = {setIsLoggedIn} isLoggedInToo= {isLoggedIn}/>
    <br/>
      <Posts setIsLoggedIn = {setIsLoggedIn}/>
    <br/>
    <Login setIsLoggedIn = {setIsLoggedIn}/>
    <LoggedIn isLoggedIn = {isLoggedIn}/>
    <Logout setIsLoggedIn = {setIsLoggedIn}/>
    <SinglePost />
  
    </div>
  );
};

export default Main;

