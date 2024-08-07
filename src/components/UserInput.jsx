import React from "react";
import DateInput from "./DateInput";
import DescriptionInput from "./DescriptionInput";
import SearchBar from "./SearchBar";
import CategoryInput from "./CategoryInput";
import AmountInput from "./AmountInput";

function UserInput() {
  return (
    <div className="InputContainer">
      <DateInput />
      <CategoryInput />
      <AmountInput />
      <DescriptionInput />
    </div>
  );
}

export default UserInput;
