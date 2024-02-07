// import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <div className="w-full px-4 py-3 border-b-gray-200 border-b flex md:flex-col ">
        <div className="left w-[50%] md:w-full">
          <form className="flex flex-col w-[65%] xl:w-[80%] lg:w-[90%]">
            {/* <Menu>
              <MenuButton
                as={"Button"}
                rightIcon={"V"}
                onClick={(e) => e.preventDefault()}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu> */}
            <label className="text-base my-1 px-1 font-inter">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
            />
            <label className="text-base my-1 px-1 font-inter">
              Short Description
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
            />
            <label className="text-base my-1 px-1 font-inter">
              Education details
            </label>
            <textarea
              rows="8"
              cols="50"
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              placeholder="Education Details"
            />
            <label className="text-base my-1 px-1 font-inter">
              Work Experience
            </label>
            <textarea
              rows="8"
              cols="50"
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              placeholder="Work Experience"
            />
            <label className="text-base my-1 px-1 font-inter">
              Achievements
            </label>
            <textarea
              cols="50"
              rows="8"
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              placeholder="Achievements"
            />
            <label className="text-base my-1 px-1 font-inter">
              Job Description
            </label>
            <textarea
              cols="50"
              rows="8"
              className="input resize-none font-inter px-3 py-2 mb-4 text-[#3F292B] outline-none border rounded-lg "
              type="text"
              placeholder="Job description"
            />
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default GenerateNewResume;
