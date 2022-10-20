import React from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "./"

const SinglePost = (props) => {
    const post = props.post;
    return(
        <div className="singlePost box">
            <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div >{post.location} </div>
          <Link to={`/posts/details/${post._id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default SinglePost;