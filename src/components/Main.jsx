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
  CreatePost
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
        <Route index element={<Posts />}/>
        <Route path="posts" >
          <Route index element={<Posts />}/>
          <Route path=":id" element={<PostDetails />}></Route>
          <Route path ="SinglePost" element={<SinglePost/>}></Route>
          <Route path ="create" element={<CreatePost/>}></Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
      {/* <Navbar />
      <Register setIsLoggedIn={setIsLoggedIn} isLoggedInToo={isLoggedIn} />
      <br />
      <Posts setIsLoggedIn={setIsLoggedIn} />
      <br />
      <Login setIsLoggedIn={setIsLoggedIn} />
      <LoggedIn isLoggedIn={isLoggedIn} />
      <Logout setIsLoggedIn={setIsLoggedIn} /> */}
    </div>
  );
};

export default Main;
