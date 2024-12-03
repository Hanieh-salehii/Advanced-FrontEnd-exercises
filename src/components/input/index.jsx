import React from "react";
const Input = ({ inputId,onchangeFunction,inputValue}) => {
  return (
    <input
      type="text"
      id={inputId}
      value={inputValue}
      onChange={onchangeFunction}
      style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
      className="w-9/12 outline-0 bg-light-green rounded-lg flex justify-center items-center px-spacing-3"
    />
  );
};
export default Input;
