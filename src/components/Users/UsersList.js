import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.Name} ({item.Age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
