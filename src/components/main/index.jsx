import React from "react";
import AddItem from "./add-item";
import ToDoList from "./todo-list";
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
