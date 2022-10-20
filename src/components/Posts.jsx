import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import { SinglePost } from "./"
import { Outlet, useParams } from 'react-router-dom'
const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
            console.log(fetchPosts, "this is a message")
        }
        fetchPosts()
    }, [])

    function filterPosts() {
        return posts.filter((post) => {
            return post._id == id
        })
    }
return (
    <div className='posts'>{`This is your Posts Component`} 
        {id ? <Outlet context={filterPosts()} /> :
            posts.length ? posts.map((post) => {
                console.log(post)
                return <SinglePost key={`post-id-${post._id}`} post={post} />
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts
