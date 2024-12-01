import React from "react"
import Button from "../button"
import logo from "../../assets/images/checklist-icon.png"
const Header = () => { 
    return (
        <div className="w-screen bg-light-beige h-20 flex justify-between items-center font-mono px-spacing-3">
            <img alt="logo" src={logo} className="size-20"/>
            <h1 className="text-3xl italic font-black">
                To Do App
            </h1>
            <Button name={"change theme"}/>
        </div>
    )
}
export default Header;