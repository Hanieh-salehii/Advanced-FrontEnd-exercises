import React from "react";
import { useTheme } from "../../context/theme-context";

const Button = ({ name, onclickfunction, ...props }) => {
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={onclickfunction && onclickfunction}
        style={{ boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.46)" }}
        className={` w-28 h-12 rounded-lg flex justify-center items-center ${
          theme === "light"
            ? "disabled:bg-disabled-light-green"
            : "disabled:bg-disabled-dark-green"
        } ${theme === "light" ? "bg-light-green" : "bg-dark-green"}`}
        {...props}
      >
        {name}
      </button>
    </>
  );
};
export default Button;
