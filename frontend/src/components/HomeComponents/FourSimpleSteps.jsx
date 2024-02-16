import React from "react";
// import temp from "../../assets/temp.svg";
import { TbTemplate } from "react-icons/tb";
import { LuFileType } from "react-icons/lu";
import { FaFileDownload } from "react-icons/fa";
import temp from "../../assets/site-structure-svgrepo-com.svg";
import text from "../../assets/businessman-options-to-choose-svgrepo-com.svg";
import ai from "../../assets/ai-ai-svgrepo-com.svg";
import dwnld from "../../assets/download-svgrepo-com.svg";
import { RiRobot2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const FourSimpleSteps = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainContainer px-8 py-24 w-full bg-oliv text-center">
        <div className="title text-center px-8 pb-8 text-[34px] font-bold font-raleway text-scrlt sm:px-0">
          Make A Resume In 4 Simple Steps
        </div>
        <div className="steps flex justify-between text-left md:flex-col">
          <div className="sections flex-1 text-xl font-relaway font-medium text-scrlt flex flex-col  gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150 sm:px-0 items-center text-center">
            <img src={temp} alt="" className="w-[4rem]" />
            <p className="">Step 1</p>
            <p className="w-[75%] lg:w-[85%]">Pick your favorite template</p>
          </div>
          <div className="sections flex-1 text-xl font-relaway font-medium text-scrlt  flex flex-col  gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150 sm:px-0 items-center text-center">
            <img src={text} alt="" className="w-[4rem] " />
            <p className="">Step 2</p>
            <p className="w-[75%] lg:w-[85%]">Choose text to tell your story</p>
          </div>
          <div className="sections flex-1 text-xl font-relaway font-medium text-scrlt flex flex-col  gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150 sm:px-0 items-center text-center">
            <img src={ai} alt="" className="w-[4rem]" />
            <p className="">Step 3</p>
            <p className="w-[75%] lg:w-[85%]">
              Our AI will generate the resume for you
            </p>
          </div>
          <div className="sections flex-1 text-xl font-relaway font-medium text-scrlt flex flex-col  gap-5 px-5 py-10 rounded-lg hover:scale-105 transition ease-in-out delay-150 sm:px-0 items-center text-center">
            <img src={dwnld} alt="" className="w-[4rem] " />
            <p className="">Step 4</p>
            <p className="w-[75%] lg:w-[85%] ">
              Download in any file format you need
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className=" text-scrlt font-inter px-4 py-2 rounded-md border-2 transition ease-in-out delay-100 hover:bg-scrlt hover:text-oliv font-semibold border-scrlt mt-8"
        >
          Create resume
        </button>
      </div>
    </>
  );
};

export default FourSimpleSteps;
