import { MdEditDocument } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const ResumeServices = () => {
  return (
    <div className="w-full px-4 py-3 border-b-gray-200  flex flex-wrap items-center gap-8 sm:flex-col">
      <Link to={"resume-generator"}>
        <div className="service w-[300px]  sm:w-full h-60 sm:h-[220px] shadow-lg rounded-md p-6 sm:px-2 flex flex-col gap-3 cursor-pointer group">
          <IoIosCreate className="text-lteal text-[55px] block float-left cursor-pointer bg-oliv rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
          <h1 className="text-2xl text-black font-inter font-semibold ">
            Resume generator
          </h1>
          <p className="text-black font-inter text-sm">
            Provide us with a snapshot of your key details, and our AI will
            craft a tailored resume just for you!
          </p>
        </div>
      </Link>
      <Link to={"cover-letter-generator"}>
        <div className="service w-[300px]  sm:w-full h-60 sm:h-[220px] shadow-lg rounded-md p-6 sm:px-2 flex flex-col gap-3 cursor-pointer group">
          <FcDocument className="text-lteal text-[55px] block float-left cursor-pointer bg-oliv rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
          <h1 className="text-2xl text-black font-inter font-semibold ">
            Cover letter generator
          </h1>
          <p className="text-black font-inter text-sm">
            Share an overview of yourself, and let our AI craft a cover letter.
          </p>
        </div>
      </Link>
      <div className="service w-[300px]  sm:w-full h-60 sm:h-[220px] shadow-lg rounded-md p-6 sm:px-2 flex flex-col gap-3 cursor-pointer group">
        <MdEditDocument className="text-lteal text-[55px] block float-left cursor-pointer bg-oliv rounded-full p-4 transition-transform duration-300 transform origin-center group-hover:scale-110" />
        <h1 className="text-2xl text-black font-inter font-semibold ">
          Resume rewriter
        </h1>
        <p className="text-black font-inter text-sm">
          We'll refine your resume to match the job description and highlight
          your qualifications.
        </p>
      </div>
      {/* <p className="text-base font-inter text-black absolute left-4 bottom-3">
        Copyright © 2024 AI Profile Builder. All rights reserved.
      </p> */}
    </div>
  );
};

export default ResumeServices;
