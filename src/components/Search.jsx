import React, { useState, useEffect } from "react";

const Search = (props) => {
  const allPosts = props.allPosts;
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(allPosts);
  }, [allPosts]);
  function postMatches(post, text) {
    const filteredPosts = posts.filter((post) => postMatches(post, search));
    const postToDisplay = search.length ? filteredPosts : post;
  }

  

  const searchPosts = (searchValue) => {
    if (searchValue !== "") {
      const filteredPosts = allPosts.filter((post) => {
        return post.description
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });

      setPosts(filteredPosts);
    } else {
      setPosts(allPosts);
    }
  };

  return (
    <div className="box">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
    </div>
  );
};

export default Search;
