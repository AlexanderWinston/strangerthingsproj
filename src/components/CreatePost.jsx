import React, { useState } from "react";
import { createPost } from "../api-adapter";
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);
  const navigate = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault();
    console.log('i am the handleSubmit')
    const newPost = await createPost({
      title,
      description,
      price,
      location,
      willDeliver,
    }, localStorage.getItem('token'));
    props.fetchPosts()
    navigate('/posts')
  }
  return (
    <div>
      CreatePost
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
        />
        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
        />
        <input
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Location"
        />
          <button type='submit'>Submit</button>
        
        {/* <button type='submit' >Submit</button> */}
      </form>
    </div>
  );
}
