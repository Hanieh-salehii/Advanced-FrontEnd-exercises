import React from "react";
import Button from "../button";
import EditItem from "./edit-item";
import Input from "../input";
const ToDoList = () => {
  return (
    <>
      <div className="flex flex-row justify-center p-spacing-2 w-full sm:w-3/4 md:w-1/2 mb-spacing-4 gap-spacing-4">
        <Input inputId="list-input" />
        <Button name="edit task" />
        <Button name="delete task" />
      </div>
      <EditItem />
    </>
  );
};
export default ToDoList;
