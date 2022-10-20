import React, { useState } from "react";
import {
  Navbar,
  Posts,
  Register,
  Login,
  Logout,
  LoggedIn,
  SinglePost,
  PostDetails,
} from "./";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="posts" element={<Posts />}>
          <Route path=":id" element={<PostDetails />}></Route>
          <Route path ="SinglePost" element={<SinglePost/>}></Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <Navbar />
      <Register setIsLoggedIn={setIsLoggedIn} isLoggedInToo={isLoggedIn} />
      <br />
      <Posts setIsLoggedIn={setIsLoggedIn} />
      <br />
      <Login setIsLoggedIn={setIsLoggedIn} />
      <LoggedIn isLoggedIn={isLoggedIn} />
      <Logout setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Main;
