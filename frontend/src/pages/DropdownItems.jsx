import { useState } from "react";

const DropdownItems = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown"></label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleDropdownChange}
        className="w-[12rem] bg-[#efece8] p-2 rounded-md font-inter text-black"
      >
        <option value="">Genral Enquirey</option>
        <option value="option1">Technical Issues</option>
        <option value="option2">Improvement Idea</option>
        <option value="option3">Feedaback</option>
        <option value="option4">Other</option>
      </select>

      <p>{selectedValue}</p>
    </div>
  );
};

export default DropdownItems;
