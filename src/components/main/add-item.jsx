import React, { useState } from "react";
import Button from "../button/index";
import Input from "../input";
const AddItem = ({handleAddTask}) => {
  const [addInputValue, setAddInputValue] = useState("");
  // console.log(addInputValue);

  const handleInputChange = (e) => {
    setAddInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleOnclick = () => {
    handleAddTask(addInputValue);
  };

  return (
    <div className="flex flex-row justify-center p-spacing-2 w-full sm:w-3/4 md:w-1/2 gap-spacing-4 mb-spacing-4">
      <Input inputId="add-input" onchangeFunction={handleInputChange} />
      <Button name="add task" onclickfunction={handleOnclick} />
    </div>
  );
};
export default AddItem;
