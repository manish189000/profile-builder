import React from "react";
import { Link } from "react-router-dom";
const Supportpage = () => {
  return (
    <>
      <div className="parent-support pl-3 pt  border-b-gray-200 border-b py-11">
        <p className=" font-inter"> Back to dashbord</p>
        <p className=" Requests text-3xl font-inter"> Support Requests</p>
      </div>

      <Link to="new-support-request">
        <button className="text-base font-inter text-white w-[18rem] outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 mt-[2rem] ml-2 ">
          Create new Support Request
        </button>
      </Link>

      <div className=" pl-[3rem] w-full font-inter border-b-gray-200 border-b   border-t-gray-200 border-t my-8 sm:overflow-x-auto py-[2rem] xl: overflow-x-auto">
        <div className="different-id flex gap-1 whitespace-nowrap font-inter">
          <p className="min-w-[8rem]">TICKET ID</p>
          <p className="min-w-[8rem]">STATUS</p>
          <p className="min-w-[8rem]">CATEGORY</p>
          <p className="min-w-[8rem]">SUBJECT</p>
          <p className="min-w-[8rem]">SUBJECT</p>
          <p className="min-w-[8rem]">PRIORITY</p>
          <p className="min-w-[8rem]">CREATED AT</p>
          <p className="min-w-[8rem]">LAST UPDATED</p>
          <p className="min-w-[8rem]">ACTIONS</p>
        </div>
      </div>
    </>
  );
};

export default Supportpage;
