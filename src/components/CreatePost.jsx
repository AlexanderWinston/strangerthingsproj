import React, {useState} from 'react';

export default function CreatePost() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(true);
    async function handleSubmit(event) {
        event.preventDefault();}
  return (
    <div>CreatePost
        <form onSubmit={handleSubmit}>
        <input placeholder='title' value={title}
        onChange={(e) => setTitle(e.target.value)} label='Title'
        /> 
          <input placeholder='description' value={description}
        onChange={(e) => setDescription(e.target.value)} label='Description'
        />  
          <input placeholder='price' value={price}
        onChange={(e) => setPrice(e.target.value)} label='Price'
        />  
          <input placeholder='location' value={location}
        onChange={(e) => setLocation(e.target.value)} label='Location'
        />  
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

