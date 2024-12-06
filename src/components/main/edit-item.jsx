import React from "react";
import Button from "../button/index";
import Input from "../input";
const EditItem = ({
  inputEditedValue,
  inputOnChange,
  saveButton,
  inputDefaultValue,
}) => {
  return (
    <>
      {/* <div className="flex flex-row justify-center p-spacing-2 w-full sm:w-3/4 md:w-1/2 gap-spacing-3 mb-spacing-4"> */}
      <Input
        inputId="edit-input"
        inputValue={inputEditedValue}
        onchangeFunction={inputOnChange}
        defaultValue={inputDefaultValue}
      />
      <Button name="save task" onclickfunction={saveButton} />
      {/* </div> */}
    </>
  );
};
export default EditItem;
