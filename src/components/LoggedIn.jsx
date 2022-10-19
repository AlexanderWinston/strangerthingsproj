import React, { useState, useEffect } from "react";
import { Register } from "./";
import { loginUser } from "../api-adapter";

const LoggedIn = (props) => {
  const [currentUser, setCurrentUser] = useState("");

  const isLoggedIn = props.isLoggedIn;
  useEffect(() => {
    if (isLoggedIn === true) {
      const user = localStorage.getItem("user");
      setCurrentUser(user);
    } else {
      setCurrentUser("");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h3> Welcome, {currentUser} </h3>
    </div>
  );
};

export default LoggedIn;
