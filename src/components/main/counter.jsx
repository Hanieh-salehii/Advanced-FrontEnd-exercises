import React from "react";
import { useTheme } from "../../context/theme-context";
const TaskCounter = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className="w-full sm:w-3/4 md:w-1/2  mb-spacing-4 px-spacing-2 flex flex-row justify-center">
      <p
        style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
        className={`py-spacing-2 w-full flex flex-row justify-center rounded ${
          theme === "light" ? "bg-light-green" : "bg-dark-green"
        }`}
      >
        Totally you have {children} tasks.
      </p>
    </div>
  );
};
export default TaskCounter;
