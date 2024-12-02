import React from "react";
import Button from "../button";
const ToDoList = () => {
  return (
    <div className="flex flex-row justify-center w-1/2 mb-spacing-4 gap-spacing-4">
      <input
        type="text"
        id="to-do-input"
        name="to-do-input"
        className="w-1/2 outline-0 bg-light-green rounded-lg flex justify-center items-center px-spacing-3"
      />
      <Button name="edit task"  />
      <Button name="delete task" />
    </div>
  );
};
export default ToDoList;
