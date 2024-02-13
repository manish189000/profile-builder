import React, { useState } from "react";
import Dropdown from "./Dropdown-items";
import Dropdown2 from "./Dropdown2";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const NewSupport = () => {
  return (
    <>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowRoundBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Create New Support Request
        </h1>
        <p className="pt-3">
          Generate new support request. We will answer as soon as possible.
        </p>
      </div>
      <div className="supportContainer px-4 py-3 border-b-gray-200 border-b">
        <div className="new-support-container flex flex-col items-center">
          <div className="pragaraph1"></div>

          <div className="form-part flex flex-row md1:ml-9  md:flex-row gap-12 w-full justify-center items-center sm:flex-col pt-5">
            <div className="left-form md:w-1/2">
              {/* Set width to 50% on desktop */}
              <p className=" font-inter pb-3">Support Category</p>
              <Dropdown />
            </div>
            <div className="right-form md:w-1/2">
              {/* Set width to 50% on desktop */}
              <p className=" font-inter pb-3"> Support Priority</p>
              <Dropdown2 />
            </div>
          </div>

          <div className="subject w-full flex flex-col items-center pt-6">
            <p className=" font-inter">Subject</p>
            <div className="input-box-centre">
              <Input
                placeholder="Please enter subject of the support request"
                size="sm"
                style={{
                  width: "25rem",
                  marginTop: "1rem",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>

          <div className="max-w-md w-full p-4 rounded-md flex flex-col items-center">
            <label
              htmlFor="message"
              className=" font-inter block text-sm font-medium text-gray-700"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>

            <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 mt-14 ">
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSupport;
