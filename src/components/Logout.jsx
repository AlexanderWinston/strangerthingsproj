import React, {useEffect, useState}  from "react";


const Logout = ({
    userList, currentUser
}) => {
    const [selectedUser, setSelectedUser] = useState();
    useEffect(() => {
        setSelectedUser(userList[0]);
    }, [userList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
      }
    
      const handleSelectChange = (event) => {
        const id = event.target.value;
        const user = userList.find(user => user.id == id);
        setSelectedUser(user);
    
      }
      const handleUserLogout = (event) => {
        setSelectedUser(userList[0]);
        clearCurrentUser();
        setCurrentUser(null);
    
      }

    
      return (
          <div>
            <button onClick= { handleSelectChange } id='logoutBtn' >Logout</button>
        </div>
    );
    ;
}

export default Logout;