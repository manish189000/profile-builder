import React, { useState } from "react";
import Dropdown from "./Dropdown-items";
import Dropdown2 from "./Dropdown2";
// import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Input from "../components/utility-components/Input";

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
        <p className="pt-3 text-gray-400 font-inter">
          Generate new support request. We will answer as soon as possible.
        </p>
      </div>
      <div className="supportContainer px-4 py-3 border-b-gray-200 border-b font-inter">
        <div className="new-support-container flex flex-col">
          <div className="form-part flex flex-row gap-12 w-full sm:flex-col pt-5">
            <div className="left-form ">
              {/* Set width to 50% on desktop */}
              <p className=" font-inter pb-3">Support Category:</p>
              <Dropdown />
            </div>
            <div className="right-form ">
              {/* Set width to 50% on desktop */}
              <p className=" font-inter pb-3"> Support Priority:</p>
              <Dropdown2 />
            </div>
          </div>

          <div className="subject w-full flex flex-col pt-6">
            <p className=" font-inter">Subject:</p>
            <div className="input-box-centre">
              {/* <Input /> */}
              <input
                type={"text"}
                // ref={ref}
                placeholder={"Please enter subject of the support request"}
                // onChange={(e) => setState(e.target.value)}
                className="input font-inter w-[45%] px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg sm:w-full"
              />

              {/* <Input
                placeholder="Please enter subject of the support request"
                size="sm"
                style={{
                  padding: "1.2rem",
                  width: "25rem",
                  marginTop: "1rem",
                  borderRadius: "0.5rem",
                }}
              /> */}
            </div>
          </div>

          <div className="max-w-md w-full rounded-md pt-6 flex flex-col ">
            <label
              htmlFor="message"
              className=" font-inter block text-base text-gray-700"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>

            <button className="text-base text-white w-36 outline-none rounded-3xl py-2 px-2 bg-lteal shadow transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:shadow-outline-blue active:shadow-none lg:hover:shadow lg:hover:-translate-y-0 mt-6 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSupport;
