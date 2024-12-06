import React from "react";
import { useTheme } from "../../context/theme-context";
const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={` w-screen  h-20 flex justify-center items-center font-mono ${
        theme === "light" ? "bg-light-beige" : "bg-dark-beige"
      }`}
    >
      Your future is created by what you do today not tomorrow
    </footer>
  );
};
export default Footer;
