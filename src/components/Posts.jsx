import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import { SinglePost } from "./"
import { Outlet, useParams } from 'react-router-dom'
const Posts = (props) => {
const posts = props.posts
return (
    <div className='posts'> 
        {
            posts.length ? posts.map((post) => {
                // console.log(post)
                return <SinglePost key={`post-id-${post._id}`} post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts
