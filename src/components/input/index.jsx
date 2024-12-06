import React from "react";
import { useTheme } from "../../context/theme-context";

const Input = ({ inputId, onchangeFunction, inputValue, ...props }) => {
  const {theme} = useTheme();
  return (
    <input
      type="text"
      id={inputId}
      value={inputValue}
      onChange={onchangeFunction}
      {...props}
      style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
      className={`w-9/12 outline-0 rounded-lg flex justify-center items-center px-spacing-3 ${
        theme === "light" ? "bg-light-green" : "bg-dark-green"
      }`}
    />
  );
};
export default Input;
