const BASE_URL = ''
export async function getPosts() {
	const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
	const result = await response.json()
	const post = result.data.posts
	return posts
}


