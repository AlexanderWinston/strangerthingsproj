import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate, } from "react-router-dom";
import { updatePost, deletePost } from "../api-adapter";
const PostDetails = (props) => {
  const { id } = useParams();
  const post = props.filterPosts(id)[0];
  const allPosts = props.posts
  const setAllPosts = props.setAllPosts
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: true,
  });
  useEffect(() => {
    if (post) {
      setFormDetails({
        title: post.title,
        description: post.description,
        price: post.price,
        location: post.location,
      });
    }
  }, [post]);
  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const update = e.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);

    const allPostsMinusDeletedPost = allPosts.filter(post => post.id != toDelete )
    setAllPosts(allPostsMinusDeletedPost)
    navigate('/posts')
    console.log(deleted);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const updatedPost = await updatePost(
      formDetails,
      post._id,
      localStorage.getItem("token")
    );
    console.log(updatedPost);
  }
  return (
    <>
      {post ? (
        <>
          <div className="box">
            <div>{post.title} </div>
            <div>{post.description} </div>
            <div>{post.price} </div>
            <div>{post.location} </div>
            <label htmlFor="will-deliver">Will Deliver</label>
            <Link to={"/posts"}>
              <button>Go Back</button>
            </Link>
          </div>
          <div className="box">
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <input id="title" defaultValue={formDetails.title} />
              <input id="description" defaultValue={formDetails.description} />
              <input id="price" defaultValue={formDetails.price} />
              <input id="location" defaultValue={formDetails.location} />
              <button type="submit">Submit</button>
            </form>
            <button
              id={post._id ? `${post._id}` : null}
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete Post
            </button>
          </div>
        </>
      ) : (
        <div>Loading your post details...</div>
      )}
    </>
  );
};

export default PostDetails;
