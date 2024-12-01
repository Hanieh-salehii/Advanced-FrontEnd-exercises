import React from "react";
const Button = ({ name }) => {
  return (
    <>
      <button className="w-28 h-12 border-2 border-dark-red rounded-lg flex justify-center items-center">
        {name}
      </button>
    </>
  );
};
export default Button;
