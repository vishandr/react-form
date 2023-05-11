import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [enteredUserList, setEnteredUserList] = useState([]);
  const addUserHandler = (enteredUser) =>{
    setEnteredUserList(prevState => {
      return [{...enteredUser, "id": prevState.length+1}, ...prevState];
    });
    console.log(enteredUserList)
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList items={enteredUserList}/>
    </div>
  );
}

export default App;
