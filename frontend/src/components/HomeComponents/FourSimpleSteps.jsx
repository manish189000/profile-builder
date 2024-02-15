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
        <div className="title text-center px-8 pb-8 text-[34px] font-bold font-raleway text-scrlt sm:px-4">
          Make A Resume In 4 Simple Steps
        </div>
        <div className="steps flex justify-between text-center md:flex-col">
          <div className="sections flex-1  text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150">
            {/* <TbTemplate className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={temp} alt="" className="w-[4rem]" />
            <p className="w-[75%] lg:w-[85%]">1. Pick your favorite template</p>
          </div>
          <div className="sections flex-1  text-xl font-relaway font-medium text-scrlt  flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150">
            {/* <LuFileType className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={text} alt="" className="w-[4rem] text-green-400" />
            <p className="w-[75%] lg:w-[85%]">
              2. Choose text to tell your story
            </p>
          </div>
          <div className="sections flex-1  text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150 ">
            {/* <RiRobot2Line className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={ai} alt="" className="w-[4rem]" />
            <p className="w-[75%] lg:w-[85%]">
              3. Our AI will generate the resume for you
            </p>
          </div>
          <div className="sections flex-1 text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg hover:scale-105 transition ease-in-out delay-150">
            {/* <FaFileDownload className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={dwnld} alt="" className="w-[4rem] " />
            <p className="w-[75%] lg:w-[85%]">
              4. Download in any file format you need
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className=" bg-scrlt mt-8 px-12 py-4 border-none outline-none rounded-full text-white font-semibold font-inter text-base"
        >
          Create resume
        </button>
      </div>
    </>
  );
};

export default FourSimpleSteps;
