import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost, Search } from "./";
import { Outlet, useParams } from "react-router-dom";
const Posts = (props) => {
  const posts = props.posts;
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const searchPosts = (searchValue) => {
    if (searchValue !== "") {
      const filteredPosts = posts.filter((post) => {
        return post.description
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    searchPosts(e.target.value);
  };
  return (
    <div className="">
      <div className="box">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
    </div>
    <div className="posts">
    {filteredPosts.length ? (
      filteredPosts.map((filteredPosts) => {
        return <SinglePost key={`post-id-${filteredPosts._id}`} post={filteredPosts} />;
      })
      ) : (
        <div>Loading Your Posts</div>
        )}
        
  </div>

  </div>
    
  );
};

export default Posts;
