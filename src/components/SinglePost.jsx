import React from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "./PostDetails"


const SinglePost = (props) => {
    const post = props.post;
    return(
        <div className="single-post box">
          <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div >{post.location} </div>
          {/* <Link to={"./PostDetails"}><button>Post Details</button></Link> */}
        </div>
    );
};

export default SinglePost;