// import {
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   Input,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   useDisclosure,
// } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { languages } from "countries-list";

const GenerateCoverLetter = () => {
  const [value, setValue] = useState("English");
  console.log(value);
  let languagesArray = Object.values(languages);
  return (
    <div>
      <div className=" hidden w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back to dashboard</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Cover letter generator
        </h1>
        <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p>
      </div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex md:flex-col ">
        <div className="left w-[50%] md:w-full">
          <form className="flex flex-col w-[65%] xl:w-[80%] lg:w-[90%]">
            <label className="text-base my-1 px-1 font-inter">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
            />
            <label className="text-base my-1 px-1 font-inter">
              Work Experience
            </label>
            <input
              type="text"
              placeholder="Work Experience"
              className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
            />
            <label className="text-base my-1 px-1 font-inter">Company</label>
            <input
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              placeholder="Company Name"
            />
            <label className="text-base my-1 px-1 font-inter">
              Job Description
            </label>
            <textarea
              rows="8"
              cols="50"
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              placeholder="Job Description"
            />
            <select
              onChange={(e) => setValue(e.target.value)}
              defaultValue={"English"}
              className="input resize-none w-[50%] font-inter px-1 py-2 mb-4 text-[#3F292B] outline-none rounded-lg border"
            >
              {languagesArray.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name} ({item.native})
                  </option>
                );
              })}
            </select>
            {/* <Menu closeOnSelect={true}>
              <MenuButton
                className="w-[52.5%]"
                as={Button}
                rightIcon={
                  <FaChevronDown className="text-sm font-inter text-left" />
                }
              >
                {value ? value : "Language"}
              </MenuButton>
              <MenuList className="scroll-y">
                {languagesArray.map((item) => {
                  return <MenuItem key={item.name}>{item.name}</MenuItem>;
                })}
              </MenuList>
            </Menu> */}
          </form>
        </div>
        <div className="right">
          {/* {languagesArray.map((item) => {
            return <p key={item.name}>{item.name}</p>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default GenerateCoverLetter;
// {languagesArray.map((item) => (
//   // Remove the "return" keyword and use parentheses
//   <MenuItem key={item.name} onClick={() => setValue(item.name)}>
//     {item.name + " " + item.native}
//   </MenuItem>
// ))}
