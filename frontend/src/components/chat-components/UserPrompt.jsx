import React from "react";

// eslint-disable-next-line react/prop-types
const UserPrompt = ({ prompt }) => {
  return (
    <div>
      <p className=" px-4 py-3 max-w-[90%] my-2 text-[15px] font-inter font-medium bg-blue-100 text-black rounded-3xl text-left float-right">
        {prompt}
      </p>
    </div>
  );
};

export default UserPrompt;
