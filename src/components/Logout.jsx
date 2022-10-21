import React, { useEffect, useState } from "react";
import { Register } from "./";

const Logout = (props) => {
  async function clearUser(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    props.setIsLoggedIn(false);
  }

  return (
    <div>
      <form onSubmit={clearUser}>
        <button id="logoutBtn" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};
export default Logout;
