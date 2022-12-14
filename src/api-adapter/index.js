const BASE_URL = 'https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET-WEB-FT'

export async function getPosts() {
	const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`)
	const result = await response.json()
	const posts = result.data.posts
	return posts
}
export async function createPost(post, token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
        post 
        })
    }
	const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`, options)
	const result = await response.json()
	return result;

}

export async function registerUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
    const result = await response.json()
    console.log(result)
    return result.data


}

export async function loginUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, options)
    const result = await response.json()
    console.log(result)
    return result.data


}
export async function updatePost(post, id, token) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            post
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
    const result = await response.json()
    return result
}
export async function deletePost(id, token) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options) 
	console.log(response, 'hellooo')
    const result = await response.json()
    return result
}
export async function getUser (token) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
	const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, options)
    console.log(response)
	const result = await response.json()
	return result.data;

}
export async function createMessage(message, id, token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
        message :{
            content: message
        }
        })
    }
    console.log(id)
	const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}/messages`, options)
	const result = await response.json()
	return result;

}