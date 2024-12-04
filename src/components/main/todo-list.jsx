import React from "react";
import Button from "../button";
const ToDoList = ({ listOfTasks }) => {
  return (
    <ul className="w-full sm:w-3/4 md:w-1/2 overflow-y-auto max-h-[345px]">
      {listOfTasks.map((task, index) => (
        <li
          key={index}
          className="flex flex-row justify-center p-spacing-2 mb-spacing-2 gap-spacing-4"
        >
          <span
            style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
            className="w-9/12 outline-0 bg-light-green rounded-lg flex justify-start items-center px-spacing-3"
          >
            {task}
          </span>
          <Button name="edit task" />
          <Button name="delete task" />
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
