import React from "react";
const Button = ({ name,onclickfunction }) => {
  return (
    <>
      <button
        onClick={onclickfunction}
        style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
        className=" w-28 h-12 rounded-lg flex justify-center items-center bg-light-green"
      >
        {name}
      </button>
    </>
  );
};
export default Button;
