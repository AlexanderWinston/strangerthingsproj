import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <div id="navbar">
      <h2> Stranger's Things</h2>
    </div>
    <Outlet />
    </div>
  );
};

export default Navbar;