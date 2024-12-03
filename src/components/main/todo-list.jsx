import React from "react";
import Button from "../button";
import EditItem from "./edit-item";
import Input from "../input";
const ToDoList = ({ listOfTasks }) => {
  return (
    <ul>
      {listOfTasks.map((task, index) => (
        <li
          key={index}
          className="flex flex-row justify-center p-spacing-2 w-full sm:w-3/4 md:w-1/2 mb-spacing-4 gap-spacing-4"
        >
          {/* <Input inputId="list-input" /> */}
          <span> {task} </span>
          {/* <Button name="edit task" />
            <Button name="delete task" /> */}
          {/* <EditItem /> */}
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
