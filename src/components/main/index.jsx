import React, { useState } from "react";
import ToDoList from "./todo-list";
import AddItem from "./add-item";
import TaskCounter from "./counter";
const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const addToList = (newTask) => {
    setTaskList([newTask,...taskList]);
  };
  return (
    <div
      style={{ height: `calc(100vh - 160px)` }}
      className=" w-screen flex flex-col justify-center items-center bg-light-red"
    >
      <AddItem handleAddTask={addToList} />
      <TaskCounter>{taskList.length}</TaskCounter>
      <ToDoList listOfTasks={taskList} />
    </div>
  );
};
export default Main;
