import React, { useState, useEffect } from "react";
import {
  Navbar,
  Posts,
  Register,
  Login,
  Logout,
  LoggedIn,
  SinglePost,
  PostDetails,
  CreatePost,
  Search,
  Profile
} from "./";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { deletePost, getPosts } from "../api-adapter";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setAllPosts] = useState([]);
  async function fetchPosts() {
    const allPosts = await getPosts();
    setAllPosts(allPosts);
    // console.log(fetchPosts, "this is a message")
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  

  function filterPosts(id) {
    return posts.filter((post) => {
      return post._id == id;
    });
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route index element={<Posts posts={posts} />} />
        <Route path="posts">
          <Route index element={<Posts posts={posts} />} />
          <Route
            path=":id"
            element={<PostDetails filterPosts={filterPosts} deletePost={deletePost} posts={posts} setAllPosts={setAllPosts}/>}
          ></Route>
          <Route path="SinglePost" element={<SinglePost />}></Route>
          <Route path="create" element={<CreatePost fetchPosts={fetchPosts} />}></Route>
          {/* <Route path="search" element={<Search/>}></Route> */}
        </Route>
        <Route path='Profile' element={<Profile/>}/>
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
