import React, { useState } from "react";
import Dropdown from "./Dropdown-items";
import Dropdown2 from "./Dropdown2";
import { Input } from "@chakra-ui/react";

const NewSupport = () => {
  return (
    <div className="new-support-container flex flex-col items-center">
      <div className="pragaraph1">
        <p className="pt-8">
          Generate new support request. We will answer as soon as possible.
        </p>
        <p className="font-inter font-medium text-4xl pt-8">
          Create New Support Request
        </p>
      </div>

      <div className="form-part flex flex-row md1:ml-9  md:flex-row gap-12 w-full justify-center items-center sm:flex-col pt-5">
        <div className="left-form md:w-1/2">
          {" "}
          {/* Set width to 50% on desktop */}
          <p className=" font-inter">Support Category</p>
          <Dropdown />
        </div>
        <div className="right-form md:w-1/2">
          {" "}
          {/* Set width to 50% on desktop */}
          <p className=" font-inter"> Support Priority</p>
          <Dropdown2 />
        </div>
      </div>

      <div className="subject w-full flex flex-col items-center pt-6">
        <p className=" font-inter">Subject</p>
        <div className="input-box-centre">
          <Input
            placeholder="Please enter subject of the support request"
            size="sm"
            style={{ width: "25rem", marginTop: "1rem", borderRadius: "1rem" }}
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
  );
};

export default NewSupport;
