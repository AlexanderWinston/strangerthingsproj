import React, { useState, useEffect } from "react";


const search = (props) => {
	const allPosts = props.allPosts;
    const [posts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	
	useEffect(()=>{
		setSearchTerm(allPosts);
	  }, [allPosts]);
	function postMatches(post, text) {
		
	const filteredPosts = posts.filter(post => postMatches(post, search));
	const postToDisplay = search.length ? filteredPosts : post;
    }

	
    const handleChange = (e) => {
        e.preventDefault();
        searchPosts(e.target.value);
      };

      const searchPosts = (searchValue) => {
        if (searchValue !== ""){
            const filteredPosts = allPosts.filter(post => {
                return post.name.toLowerCase().includes(searchValue.toLowerCase());
            });

            setPosts(filteredPosts);
        }
        else {
            setPosts(allPosts);
        }
      }

	return (
		<div className="box">
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} />
    </div>
	  );
}
 
export default search;








