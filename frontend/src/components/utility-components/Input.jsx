import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Input = forwardRef(({ type, placeholder, setState }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      placeholder={placeholder}
      onChange={(e) => setState(e.target.value)}
      className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
    />
  );
});
export default Input;
