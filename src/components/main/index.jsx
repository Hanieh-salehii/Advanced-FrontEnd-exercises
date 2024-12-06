import React, { useState } from "react";
import ToDoList from "./todo-list";
import AddItem from "./add-item";
import TaskCounter from "./counter";
import { useTheme } from "../../context/theme-context";
const Main = () => {
  const { theme } = useTheme();

  const [taskList, setTaskList] = useState([]);
  const addToList = (newTask) => {
    setTaskList([newTask, ...taskList]);
  };
  return (
    <div
      style={{ height: `calc(100vh - 160px)` }}
      className={` w-screen flex flex-col justify-center items-center ${
        theme === "light" ? "bg-light-red" : "bg-dark-red"
      } `}
    >
      <AddItem handleAddTask={addToList} />
      <TaskCounter>{taskList.length}</TaskCounter>
      <ToDoList listOfTasks={taskList} setListOfTasks={setTaskList} />
    </div>
  );
};
export default Main;
