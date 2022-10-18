import React from "react";
import { Register } from "./"

const Login = (props) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
        const token = registeredUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
    }
    return (
        <div>
            <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginUsername" >Username: </label>
        <input id="loginUsername" type="text" required />
        <label htmlFor="loginPassword" >Password: </label>
        <input id="loginPassword" type='password' />
        <button type="submit">Login</button> 
      </form>
    </div>
        </div>
    );
};

export default Login;