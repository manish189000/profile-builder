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

const FourSimpleSteps = () => {
  return (
    <>
      <div className="mainContainer px-8 py-24 w-full bg-oliv">
        <div className="title text-center px-8 pb-8 text-[34px] font-bold font-raleway text-scrlt sm:px-4">
          Make A Resume In 4 Simple Steps
        </div>
        <div className="steps flex justify-between text-center md:flex-col">
          <div className="sections  text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150">
            {/* <TbTemplate className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={temp} alt="" className="w-[4rem]" />
            <p>1. Pick your favorite template</p>
          </div>
          <div className="sections  text-xl font-relaway font-medium text-scrlt  flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150">
            {/* <LuFileType className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={text} alt="" className="w-[4rem]" />
            <p>2. Choose text to tell your story</p>
          </div>
          <div className="sections  text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg  hover:scale-105 transition ease-in-out delay-150 ">
            {/* <RiRobot2Line className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={ai} alt="" className="w-[4rem]" />
            <p>3. Our AI will generate resume for you</p>
          </div>
          <div className="sections text-xl font-relaway font-medium text-scrlt flex flex-col items-center gap-5 px-5 py-10 rounded-lg hover:scale-105 transition ease-in-out delay-150">
            {/* <FaFileDownload className="text-[4rem] bg-oliv p-4 rounded-full text-lteal" /> */}
            <img src={dwnld} alt="" className="w-[4rem] " />
            <p>4. Download in any file format you need</p>
          </div>
        </div>
        {/* <button>Create My Resume</button> */}
      </div>
    </>
  );
};

export default FourSimpleSteps;
