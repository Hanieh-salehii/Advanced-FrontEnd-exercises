import React from "react";
const Input = ({ inputId }) => {
  return (
    <input
      type="text"
      id={inputId}
      className="w-9/12 outline-0 bg-light-green rounded-lg flex justify-center items-center px-spacing-3"
    />
  );
};
export default Input;
