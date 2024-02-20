import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types, no-unused-vars
const Textarea = forwardRef(({ placeholder, value }, ref) => {
  return (
    <textarea
      rows="8"
      cols="50"
      className="input resize-none font-inter text-base px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
      placeholder={placeholder}
    />
  );
});

export default Textarea;
