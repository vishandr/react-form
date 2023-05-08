import React from "react";

const AddUser = props => {
    const addUserHandler = (event) => {
            event.preventDefault();
            console.log('AddUser button pressed')
        }
        
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id='username' type="text" />
            <label htmlFor="age">Age</label>
            <input id='age' type="text" />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;