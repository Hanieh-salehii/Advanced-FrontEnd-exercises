import React, { useState } from "react";
import ToDoList from "./todo-list";
import AddItem from "./add-item";
const Main = () => {
  const [taskList, setTaskList]=useState([])
  const addToList = (newTask) => {
    console.log(newTask);
    setTaskList([...taskList,newTask])
  };
  return (
    <div
      style={{ height: `calc(100vh - 160px)` }}
      className=" w-screen flex flex-col justify-center items-center bg-light-red"
    >
        <AddItem handleAddTask={addToList}/>
        <ToDoList/>
    </div>
  );
};
export default Main;
