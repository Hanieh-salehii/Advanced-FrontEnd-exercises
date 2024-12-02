import React from "react";
import Button from "../button/index";
import Input from "../input";
const AddItem = () => {
  return (
    <div className="flex flex-row justify-center p-spacing-2 w-full sm:w-3/4 md:w-1/2 gap-spacing-4 mb-spacing-4">
      <Input inputId="add-input" />
      <Button name="add task" />
    </div>
  );
};
export default AddItem;
