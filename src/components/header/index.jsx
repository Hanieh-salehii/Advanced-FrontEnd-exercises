import React from "react"
import Button from "../button"
import logo from "../../assets/images/checklist-icon.png"
import { useTheme } from "../../context/theme-context";
const Header = () => { 
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={` w-screen h-20 flex justify-between items-center font-mono px-spacing-3 ${theme === "light"? "bg-light-beige" : "bg-dark-beige"}  `}>
            <img alt="logo" src={logo} className="size-20"/>
            <h1 className="text-3xl italic font-black">
                To Do App
            </h1>
            <Button name={"change theme"} onclickfunction={() => toggleTheme()}/>
        </div>
    )
}
export default Header;