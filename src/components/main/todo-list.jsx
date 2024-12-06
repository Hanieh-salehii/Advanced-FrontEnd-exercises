import React, { useState } from "react";
import Button from "../button";
import EditItem from "./edit-item";
import { useTheme } from "../../context/theme-context";
const ToDoList = ({ listOfTasks, setListOfTasks }) => {
  const { theme } = useTheme();

  const deleteTask = (task) => {
    const updatedList = listOfTasks.filter((item) => item !== task);
    setListOfTasks(updatedList);
    console.log(typeof updatedList);
    console.log(updatedList);
  };

  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(null);
  const handleEditButton = (task, index) => {
    // console.log(task);
    // console.log(index);
    setEditId(index);
  };
  const handleEditInput = (editingValue) => {
    // console.log(editingValue);
    setEditValue(editingValue);
  };
  const handleSaveButton = (index, task) => {
    listOfTasks.map(() => {
      if (editId === index) {
        console.log(typeof listOfTasks, listOfTasks);
        const updatedList = listOfTasks.filter((item) => item !== task);
        return setListOfTasks([editValue, ...updatedList]);
      } else {
        return setListOfTasks(listOfTasks);
      }
    });
    setEditId(null);
    setEditValue("");
  };

  return (
    <ul className="w-full sm:w-3/4 md:w-1/2 overflow-y-auto max-h-[345px]">
      {listOfTasks.map((task, index) => (
        <li
          key={index}
          className="flex flex-row justify-center p-spacing-2 mb-spacing-2 gap-spacing-4"
        >
          {editId === index ? (
            <EditItem
              inputDefaultValue={task}
              // inputEditedValue={task}
              inputOnChange={(e) => handleEditInput(e.target.value, index)}
              saveButton={() => handleSaveButton(index, task)}
            />
          ) : (
            <>
              <span
                style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
                className={`w-9/12 outline-0 rounded-lg flex justify-start items-center px-spacing-3 ${
                  theme === "light" ? "bg-light-green" : "bg-dark-green"
                }`}
              >
                {task}
              </span>
              <Button
                name="edit task"
                onclickfunction={() => {
                  handleEditButton(task, index);
                }}
              />
              <Button
                name="delete task"
                onclickfunction={() => {
                  deleteTask(task);
                }}
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
