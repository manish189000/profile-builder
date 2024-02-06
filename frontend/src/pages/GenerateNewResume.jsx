import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const GenerateNewResume = () => {
  return (
    <div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b ">
        <div className="flex gap-1 items-center text-black">
          <Link to={`/dashboard`}>
            <IoIosArrowBack />
          </Link>
          <Link to={`/dashboard`}>
            <p className="text-sm font-inter text-black">Back to dashboard</p>
          </Link>
        </div>
        <h1 className=" py-4 text-3xl text-black font-inter font-bold pb-0">
          Resume generator
        </h1>
        <p className="text-sm text-gray-300 font-inter py-2">
          Provide us with a snapshot of your key details, and our AI will craft
          a tailored resume just for you.
        </p>
      </div>
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex ">
        <div className="left w-[50%]">
          <form className="flex flex-col w-[80%] space-y-3">
            <label className="text-base my-1 px-1 font-inter">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="input font-inter px-3 py-2 mb-10 text-[#3F292B] outline-none border rounded-lg w-[80%]"
            />
            <label className="text-base my-1 px-1 font-inter">
              Short Description
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input font-inter px-3 py-2 mb-3 text-[#3F292B] outline-none border rounded-lg w-[80%]"
            />
            <label className="text-base my-1 px-1 font-inter">
              Education details
            </label>
            <textarea
              rows="8"
              cols="50"
              className="input resize-none font-inter px-3 py-2 text-[#3F292B] outline-none border rounded-lg w-[80%]"
              placeholder="Education Details"
            />
            <label className="text-base my-1 px-1 font-inter">
              Work Experience
            </label>
            <textarea
              rows="8"
              cols="50"
              className="input resize-none font-inter px-3 py-2 text-[#3F292B] outline-none border rounded-lg w-[80%]"
              placeholder="Work Experience"
            />
            <label className="text-base my-1 px-1 font-inter">
              Achievements
            </label>
            <textarea
              cols="50"
              rows="8"
              className="input resize-none font-inter px-3 py-2 text-[#3F292B] outline-none border rounded-lg w-[80%]"
              placeholder="Achievements"
            />
            <label className="text-base my-1 px-1 font-inter">
              Job Description
            </label>
            <textarea
              cols="50"
              rows="8"
              className="input resize-none font-inter px-3 py-2 text-[#3F292B] outline-none border rounded-lg w-[80%]"
              type="text"
              placeholder="Job description"
            />
            <Menu>
              <MenuButton as={"Button"} rightIcon={<FaAngleDown />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default GenerateNewResume;
