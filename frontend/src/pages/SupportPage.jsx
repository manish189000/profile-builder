import React from "react";
import { IoIosArrowBack, IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Supportpage = () => {
  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowRoundBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back to dashboard</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Support Page
        </h1>
      </div>
      <div className="container px-4 py-4">
        <Link to="new-support-request">
          <button className="text-base font-inter text-white w-[18rem] outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 ">
            Create new Support Request
          </button>
        </Link>

        <div className=" px-4 py-3 mt-4 text-sm w-full font-inter border-gray-200 border-[1px] rounded sm:overflow-x-auto  overflow-x-auto">
          <div className="different-id flex whitespace-nowrap font-inter">
            <p className="p min-w-32">Ticket Id</p>
            <p className="p min-w-32">Status</p>
            <p className="p min-w-32">Category</p>
            <p className="p min-w-32">Subject</p>
            <p className="p min-w-32">Priority</p>
            <p className="p min-w-32">Created At</p>
            <p className="p min-w-32">Last Updated</p>
            <p className="p min-w-32">Actions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supportpage;
