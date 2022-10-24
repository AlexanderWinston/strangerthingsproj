import React, { useEffect, useState } from "react";
import { getUser } from "../api-adapter";
const Profile = (props) => {
	const [user, setUser] = useState({})
	useEffect(() => {
		async function userData(){
			const token = localStorage.getItem('token')
			const userFetch = await getUser(token)
			console.log(userFetch)
			// const messages = props.messages;
			setUser(userFetch)

		}
		userData()
	},[])
	return (
		<div className="Profile">
		  {user && user.messages ? (
			user.messages.map((message) => {
			  // console.log(post)
			  return <div>{message.content}</div>
			})
		  ) : (
			<div>Loading Your Messages...</div>
		  )}
		</div>
	  );
	
	
	
	
	
	
}
export default Profile;





