import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <div id="navbar">
      <h2> Stranger's Things</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/create">Create Post</Link>     
    </div>
    <Outlet />
    </div>
  );
};

export default Navbar;