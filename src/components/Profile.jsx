import React, { useEffect, useState } from "react";
import { getUser } from "../api-adapter";
const Profile = () => {
	const [user, setUser] = useState({})
	useEffect(() => {
		async function userData(){
			const token = localStorage.getItem(token)
			const userFetch = await getUser()
			const messages = props.messages;
			setUser(userFetch)

		}
		userData()
	},[])
	return (
		<div className="Profile">
		  {user.messages ? (
			user.messages.map((message) => {
			  // console.log(post)
			  return <div>Message</div>
			})
		  ) : (
			<div>Loading Your Messages</div>
		  )}
		</div>
	  );
	
	
	
	
	
	
}
export default Profile;





