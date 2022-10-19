import React, {useEffect, useState}  from "react";
import { Register } from "./";

const Logout = (props) => {
    
    async function clearUser(){
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
    console.log(clearUser, 'clear')
      
    }
    
      return (
          <div>
            <form onSubmit={clearUser}>
            <button onClick= { props.onClick } id='logoutBtn' type="submit" >Logout</button>
            </form>
        </div> 
    );
    
    
}
export default Logout;