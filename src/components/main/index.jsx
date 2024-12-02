import React from "react";
import ToDoList from "./todo-list";
import AddItem from "./add-item";
const Main = () => {
  return (
    <div
      style={{ height: `calc(100vh - 160px)` }}
      className=" w-screen flex flex-col justify-center items-center bg-light-red"
    >
        <AddItem/>
        <ToDoList/>
    </div>
  );
};
export default Main;
