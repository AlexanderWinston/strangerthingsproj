import React from "react";
import { Register } from "./"
import { loginUser } from "../api-adapter";

const LoggedIn = () =>{
const user = localStorage.getItem('user')
	return(
	<div>
		<h3> Welcome, {user} </h3>
	</div>
	)
		
	
	
}






export default LoggedIn;