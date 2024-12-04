import React from "react";
const TaskCounter = ({ children }) => {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2  mb-spacing-4 px-spacing-2 flex flex-row justify-center">
      <p
        style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
        className=" py-spacing-2 w-full flex flex-row justify-center bg-light-green rounded"
      >
        Totally you have {children} tasks.
      </p>
    </div>
  );
};
export default TaskCounter;
